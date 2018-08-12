import ReactLogger from "../utils/ReactLogger";
import crypto from 'crypto';
import { PASSWORDKEY } from './constants';

//import {generateMnemonic} from './utils/ethFunctions'
import { generateMnemonic, generateSeed, generateHDKeyFromSeed, genKeys } from './../utils/ethFunctions';
import { UPDATE_ACCOUNTS } from './types';

//Todo1[Done]: after creation of wallet account store should be updated 
//Todo2: balance store should be updated with appropriate token prefix
//Todo3: enckeys store should be updated 
//todo4: wallet metadata should be updated
export  function createWallet(password){
    return async (dispatch)=>{
        ReactLogger("i am in createWallest")
        const {accounts, mnemonic} = await createCoinbaseAccounts()
        const addresses = accounts.map(x=>x.address) 
        dispatch(updateAccounts(addresses)); //dispatch to reducer to update account store            
        savepass(password)        
        return mnemonic;
    }
} 


function updateAccounts(accounts=[]){
    return {type: UPDATE_ACCOUNTS,accounts}
}


function savepass(pwd){   
    const hash = crypto.createHash('sha256').update(pwd).digest('base64');
    localStorage.setItem(PASSWORDKEY,hash)
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

