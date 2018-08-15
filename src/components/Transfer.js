import React, { Component } from 'react';

import {Row,Col, Input, Select,Button, Icon} from 'antd'
import ReactLogger from '../utils/ReactLogger';
import { connect } from 'react-redux';


class Transfer extends Component {
    constructor(props) {
        super(props);
        const {accounts,balances,encKeys,tokens} = this.props.state
        this.state = { }
    }

    handleChange = (e)=>{
        ReactLogger("i am checking handlechange") 
        ReactLogger(e)
        }

    render() { 
        const {accounts,balances,encKeys,tokens} = this.props.state
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
                        <div>
                        <Input placeholder="Amount to send" addonAfter={<Icon type="setting" />} />
                        <Input placeholder="Amount to send in USD" addonAfter={<Icon type="setting" />} />
                        </div>
                        <br/>

                        <Button type='primary ' > Send</Button>
                        
                    </div>
               </Col>
                <Col span = {6} className='black'> Ethereum Icon </Col>
            
            </Row>  
        );
    }
}

function mapStateToProps(state){
    return {state}
}
 
export default connect(mapStateToProps)(Transfer);
