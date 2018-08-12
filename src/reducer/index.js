
import { UPDATE_ACCOUNTS } from './../actions/types';
const initialState={
metadata:{ver:"",createDate:""},
accounts:[],
enckeys:{},
balances:{},
tokens:[{"name":"BTC"},
        {"name":"XMR"},
        {"name":"ETH"}]

} 

export default (state=initialState,action={})=>{
    switch(action.type){
        case UPDATE_ACCOUNTS:
            const accounts= action.accounts 
            return{
                ...state,
               accounts
            }  
        default: return state;
    }

}