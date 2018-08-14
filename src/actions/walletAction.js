import ReactLogger from "../utils/ReactLogger";
import crypto from 'crypto';
import { PASSWORDKEY } from './constants';

//import {generateMnemonic} from './utils/ethFunctions'
import { generateMnemonic, generateSeed, generateHDKeyFromSeed, genKeys } from './../utils/ethFunctions';
import { UPDATE_ACCOUNTS, UPDATE_BALANCES, UPDATE_ENCKEYS } from './types';

//Todo1[Done]: after creation of wallet account store should be updated 
//Todo2[Done]: balance store should be updated with appropriate token prefix
//Todo3[Done]: enckeys store should be updated 
//todo4: wallet metadata should be updated
export  function createWallet(password, storeTokens){
    return async (dispatch)=>{
        //ReactLogger("i am in createWallet")
        const {accounts, mnemonic} = await createCoinbaseAccounts()
        //ReactLogger(accounts)
        await populateAccStore(dispatch, accounts) //dispatch to reducer to update account store           
        await populateBalStore(dispatch,accounts,storeTokens) //update bal store
        await populateEncKeys(dispatch,accounts) //update enc
        savepass(password)        
        return mnemonic;
    }
} 


export function updateAccounts(accounts=[]){
    return {type: UPDATE_ACCOUNTS,accounts}
}

export function updateAccBals(balances=[]){
    return {type: UPDATE_BALANCES,balances}
}

export function updateEncKeys(encKeys={}){
    return {type: UPDATE_ENCKEYS,encKeys}
}



export function createCoinbaseAccounts(){
    return new Promise((resolve,reject)=>{
        const mnemonic = generateMnemonic()
        const masterseed =generateSeed(mnemonic)
        const rootBuffer =  generateHDKeyFromSeed(masterseed)
        
        const accounts = [0,1,2].map(x=>genKeys(rootBuffer,x))
        resolve({accounts, mnemonic})
    })
}

export function populateAccStore(dispatch, accounts){
    return new Promise((resolve, reject)=>{
        const addresses = accounts.map(x=>x.address)
        //ReactLogger("From addresses") 
        //ReactLogger(addresses)
        dispatch(updateAccounts(addresses));
        resolve(addresses)
    }) 
} 

export function populateBalStore(dispatch, accounts, tokens ){
    return new Promise((resolve,reject)=>{
        
        
    const bal= accounts.map(x=> {
                const obj ={}
                 obj.acc=x.address
                 obj['USD']= "0.00"
                tokens.forEach(token=>obj[token]="0.00")
                return obj
           })
        ReactLogger("From Balances")
        ReactLogger(bal)
        dispatch(updateAccBals(bal))                 
        resolve(bal)
    })
} 

export function populateEncKeys(dispatch,accounts){
    return new Promise((resolve,reject)=>{
        const encKeys = {}
        accounts.forEach(item=>{
            const {address,privateKey,publicKey,index} = item
            encKeys[address]= {privateKey,publicKey,index} 
        })
        //ReactLogger("From EncKeys again")
        //ReactLogger(encKeys)
        dispatch(updateEncKeys(encKeys))
        resolve(encKeys)

    })
}  

function savepass(pwd){   
    const hash = crypto.createHash('sha256').update(pwd).digest('base64');
    localStorage.setItem(PASSWORDKEY,hash)
 } 

