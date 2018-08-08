import ReactLogger from "../utils/ReactLogger";
import crypto from 'crypto';
import { PASSWORDKEY } from './constants';

//import {generateMnemonic} from './utils/ethFunctions'
import { generateMnemonic, generateSeed, generateHDKeyFromSeed, genKeys } from './../utils/ethFunctions';






export  function createWallet(password){
    return async (dispatch)=>{
        ReactLogger("i am in createWallet")
        const {accounts, mnemonic} = await createCoinbaseAccounts()
        ReactLogger(accounts)        
        savepass(password)
        ReactLogger(typeof(mnemonic))
        return mnemonic;
    }
} 

function savepass(pwd){   
    const hash = crypto.createHash('sha256').update(pwd).digest('base64');
    //localStorage.setItem(PASSWORDKEY,hash)
    ReactLogger(hash)
    

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

