
import { UPDATE_ACCOUNTS, UPDATE_BALANCES, UPDATE_ENCKEYS, LOADSTORE } from './../actions/types';

import ReactLogger from '../utils/ReactLogger';
const initialState={
metadata:{ver:"0",createDate:""},
accounts:[],
encKeys:{},
balances:[],
tokens:[{name:"WETH",usdx:"0.0202",contract:"0xc778417E063141139Fce010982780140Aa0cD5Ab",desc:""},
        {name:"BOKKY",usdx:"9.9959",contract:"0x583cbBb8a8443B38aBcC0c956beCe47340ea1367", desc:""},
        {name:"OMG",usdx:"3.8656",contract:"", desc:""}]

} 

//Todo: get token usdx rates from coinmarket cap 

export default (state=initialState,action={})=>{
    switch(action.type){
        case UPDATE_ACCOUNTS:
            const accounts= action.accounts
            ReactLogger("trying to update accounst store") 
            ReactLogger(accounts)
            return {...state, accounts}
            
        case UPDATE_BALANCES:
            const balances = action.balances
            ReactLogger("trying to update balances store") 
            ReactLogger(balances)
            return {...state,balances}
        
        case UPDATE_ENCKEYS:
            const {encKeys} = action
            ReactLogger("trying to updateenc store") 
            ReactLogger(encKeys)
            return {...state,encKeys}

        case LOADSTORE:
            return action.store

        
        default: return state;
    }

}