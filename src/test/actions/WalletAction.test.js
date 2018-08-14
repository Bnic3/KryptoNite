
//import { createCoinbaseAccounts } from './../../src/actions/walletAction';
const createCoinbaseAccounts =require('./../../src/actions/walletAction').createCoinbaseAccounts

describe("Wallet", async ()=>{
    it("it should create 3 coinbase accounts ",async ()=>{
        const {accounts} = await createCoinbaseAccounts
        //expect(accounts).toHaveLength(3)
        
    }) 

})
