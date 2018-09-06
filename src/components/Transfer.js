import React, { Component } from 'react';

import {Row,Col, Input, Select,Button, Icon} from 'antd'
import ReactLogger from '../utils/ReactLogger';
import { connect } from 'react-redux';
import EthereumConnector from './../utils/EthereumConnector';

import eth from "../img/eth-icon.jpg"


class Transfer extends Component {
    constructor(props) {
        super(props);
        const {accounts,balances,encKeys,tokens} = this.props.state
        this.state = {coinbase:"",
                        coinbal:"",
                        acc:"",accbal:"" }

        this.Connector = new EthereumConnector()
        //this.Connector.connect("http://127.0.0.1:7545/")
        this.Connector.connect("https://ropsten.infura.io/v3/08afda8867174eaea84cf0407f93f84d")
        this.weth = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]
        this.bokky =[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"ethers","type":"uint256"}],"name":"withdrawEthers","outputs":[{"name":"ok","type":"bool"}],"payable":false,"type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"TokensCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]
        this.bnb =[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"ethers","type":"uint256"}],"name":"withdrawEthers","outputs":[{"name":"ok","type":"bool"}],"payable":false,"type":"function"},{"inputs":[{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint8"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"TokensCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}] 
    }
    

    handleChange = (e)=>{
        ReactLogger("i am checking handlechange") 
        ReactLogger(e)
        }

    getBal=async ()=>{
         const coinbal =  await this.Connector.getBalance(this.state.coinbase) 
         const accbal = await this.Connector.getBalance(this.state.acc)
         this.setState({coinbal,accbal})
    }

    sendEth= async ()=>{
        await this.Connector.sendTran(this.state.coinbase,this.state.acc)
        ReactLogger("Done sending")

    }
    getCoinbase = async ()=>{
        const coinbase = await this.Connector.getCoinbase()
        const acc= this.props.state.accounts[0]
        this.setState({coinbase,acc})
    }
    
    

    render() { 
        const {accounts,balances,encKeys,tokens} = this.props.state
        const {coinbal,coinbase,acc,accbal} = this.state;
        const InputGroup = Input.Group;
        const Option = Select.Option;

        const tokenOption = tokens.map(x=><Option value={x}>{x}</Option>)
        const accOptions = accounts.map((x,index)=><Option value={x}>{`Acc ${index}`}</Option>)



        return (
            <Row type='flex'>
                <Col span={12} className='transfer_canvas '>
                    <div className='transfer_block'>
                        <h3>From:</h3>

                        <InputGroup compact>
                        <Button type='primary' style={{ width: '30%' }}> Select Account</Button>
                       
                            <Select defaultValue={accounts[0]} onChange={this.handleChange}>
                                {accOptions}
                            </Select>
                            
                        </InputGroup>
                        <br/>
                                              

                        <InputGroup compact>
                        <Button type='primary ' style={{ width: '30%' }}> Select Crypto</Button>
                            <Select defaultValue="ETH" onChange={this.handleChange} >
                                {tokenOption}                                
                            </Select>
                            
                        </InputGroup>
                        <br/>

                        <p>Available Balance</p>
                        <p>0.00 ETH</p>
                        <p>0.00 USD</p>

                        <h3>To:</h3>                        
                        <Input placeholder="Recipients Address" addonAfter={<Icon type="setting" />} />                       
                        <br/>

                        <p>Coinbase:  {coinbase}</p>
                        <p>Coinbase bal:  {coinbal}</p>
                        <p>My Acc:  {acc}</p>
                        <p>My Acc Bal: {accbal}</p>

                        <h3>Amount to Transact</h3>
                        <div>
                        <Input placeholder="Amount to send" addonAfter={<Icon type="setting" />} />
                        <Input placeholder="Amount to send in USD" addonAfter={<Icon type="setting" />} />
                        </div>
                        <br/>

                        <Button type='primary ' onClick={this.getBal} >Bal</Button>
                        <Button type='primary ' onClick={this.sendEth}  > Send</Button>
                        <Button type='primary ' onClick={this.getCoinbase}  > Coinbase</Button>
                        
                    </div>
               </Col>
                <Col span = {6} className=''> <img src={eth} /> </Col>
            
            </Row>  
        );
    }
}

function mapStateToProps(state){
    return {state}
}
 
export default connect(mapStateToProps)(Transfer);
