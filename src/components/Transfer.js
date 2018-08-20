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
        this.Connector.connect("http://127.0.0.1:7545/")
        
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
                        <Button type='primary ' style={{ width: '30%' }}> Select Account</Button>
                       
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
