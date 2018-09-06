import Web3 from 'web3'
import Tx from 'ethereumjs-tx'
export default class EthereumConnector {

    connect(url){
        if(typeof web3 !== 'undefined') {
            this.web3 = new Web3(Web3.currentProvider);
        } else {
            this.web3 = new Web3(new Web3.providers.HttpProvider(url))
        }
    }

    getAccounts=()=>{
         return this.web3.eth.getAccounts()
    }

    getCoinbase=()=>{
        return this.web3.eth.getCoinbase()
    }

    getBalance =(acc)=>{
        return this.web3.eth.getBalance(acc)
    }

    sendTran=(from,to)=>{
      return ( this.web3.eth.sendTransaction({
            from,
            to,
            value: '1000'
        }))
    }

    

    createTxObject = async (from,key,to )=>{
        const nonce= await this.web3.eth.getTransactionCount(from)
        const gasLimit = this.web3.utils.toHex(8000000)
        const gasPrice = this.web3.utils.toHex(this.web3.utils.toWei('10','gwei'))
        return {
            nonce,
            gasLimit,
            gasPrice,
            to,
            
        }
        

    } 





}