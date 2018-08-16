import Web3 from 'web3'
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


}