import React, { Component } from 'react';

import {Row,Col, Input, Select,Button, Icon} from 'antd'
import ReactLogger from '../utils/ReactLogger';
import { connect } from 'react-redux';


class Transfer extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    handleChange = (e)=>{
        ReactLogger("i am checking handlechange") 
        ReactLogger(e)
        }

    render() { 
        const InputGroup = Input.Group;
        const Option = Select.Option;
        return (
            <Row type='flex'>
                <Col span={12} className='transfer_canvas '>
                    <div className='transfer_block'>
                        <h3>From:</h3>

                        <InputGroup compact>
                        <Button type='primary ' style={{ width: '30%' }}> Select Account</Button>
                       
                            <Select defaultValue="Acc0" onChange={this.handleChange}>
                                <Option value="Acc1">Acc0</Option>
                                <Option value="Acc2">Acc1</Option>
                            </Select>
                            
                        </InputGroup>
                        <br/>
                                              

                        <InputGroup compact>
                        <Button type='primary ' style={{ width: '30%' }}> Select Crypto</Button>
                            <Select defaultValue="ETH" onChange={this.handleChange} >
                                <Option value="ETH">ETH</Option>
                                <Option value="BTC">BTC</Option>
                                <Option value="XMR">XMR</Option>
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
 
export default connect()(Transfer);
