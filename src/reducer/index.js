
import { UPDATE_ACCOUNTS, UPDATE_BALANCES, UPDATE_ENCKEYS, LOADSTORE } from './../actions/types';
const initialState={
metadata:{ver:"0",createDate:""},
accounts:[],
enckeys:{},
balances:{},
tokens:["BTC",
        "XMR",
        "ETH"]

} 

export default (state=initialState,action={})=>{
    switch(action.type){
        case UPDATE_ACCOUNTS:
            const accounts= action.accounts 
            return {...state, accounts}
            
        case UPDATE_BALANCES:
            const balances = action.balances
            return {...state,balances}
        
        case UPDATE_ENCKEYS:
            const {encKeys} = action
            return {...state,encKeys}

        case LOADSTORE:
            return action.store

        
        default: return state;
    }

}