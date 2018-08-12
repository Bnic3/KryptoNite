import ReactLogger from "../utils/ReactLogger";
import crypto from 'crypto';
import { PASSWORDKEY } from './constants';

//import {generateMnemonic} from './utils/ethFunctions'
import { generateMnemonic, generateSeed, generateHDKeyFromSeed, genKeys } from './../utils/ethFunctions';
import { UPDATE_ACCOUNTS, UPDATE_BALANCES } from './types';

//Todo1[Done]: after creation of wallet account store should be updated 
//Todo2[Done]: balance store should be updated with appropriate token prefix
//Todo3: enckeys store should be updated 
//todo4: wallet metadata should be updated
export  function createWallet(password, storeTokens){
    return async (dispatch)=>{
        ReactLogger("i am in createWallest")
        const {accounts, mnemonic} = await createCoinbaseAccounts()
        await populateAccStore(dispatch, accounts) //dispatch to reducer to update account store           
        await populateBalStore(dispatch,accounts,storeTokens) //update bal store
        savepass(password)        
        return mnemonic;
    }
} 


function updateAccounts(accounts=[]){
    return {type: UPDATE_ACCOUNTS,accounts}
}

function updateAccBals(balances={}){
    return {type: UPDATE_BALANCES,balances}
}




function createCoinbaseAccounts(){
    return new Promise((resolve,reject)=>{
        const mnemonic = generateMnemonic()
        const masterseed =generateSeed(mnemonic)
        const rootBuffer =  generateHDKeyFromSeed(masterseed)
        const accounts = [0,1,2].map(x=>genKeys(rootBuffer,x))
        resolve({accounts, mnemonic})
    })
}

function populateAccStore(dispatch, accounts){
    return new Promise((resolve, reject)=>{
        const addresses = accounts.map(x=>x.address) 
        ReactLogger(addresses)
        dispatch(updateAccounts(addresses));
        resolve()
    }) 
} 

function populateBalStore(dispatch, accounts, tokens ){
    return new Promise((resolve,reject)=>{
        const bal = {}
        
        accounts.forEach(acc=>{
             tokens.map(x=>x.name.toLowerCase()+acc)
            .forEach(item=>bal[item]="0.00")           
        }) 
        ReactLogger(bal)
        dispatch(updateAccBals(bal))                 
        resolve()
    })
} 

function savepass(pwd){   
    const hash = crypto.createHash('sha256').update(pwd).digest('base64');
    localStorage.setItem(PASSWORDKEY,hash)
 } 

