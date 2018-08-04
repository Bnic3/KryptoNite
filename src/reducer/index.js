
const initialState={
metadata:{ver:"",createDate:""},
accounts:[],
enckeys:{},
balances:{},
tokens:[]
} 

export default (state=initialState,action={})=>{
    switch(action.type){
        default: return state;
    }

}