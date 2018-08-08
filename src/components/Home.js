import React, { Component } from 'react';


import {connect}  from "react-redux";

import { Row, Col, Layout, Card, Input, Button, Modal } from 'antd';
import { createWallet } from './../actions/walletAction';
import ReactLogger from '../utils/ReactLogger';

class Home extends Component {
    state = { loading: false, disable: false, showModal: false,
    password:"", mnemonic:'' }

    enterloading = () =>{
        this.setState({loading:true, disable:true})
        this.processWallet();
        this.setState({ showModal: true });
        //Todo: save create Wallet show mnemonic and navigate to dashboard 
    }

    handleCancel = (e) => {        
        this.setState({ showModal: false });
      }
    inputOnChange=(e)=>{
    this.setState({password:e.target.value})
    }

    processWallet= async ()=>{
        //Todo: write complex validation code here
        if (this.state.password !== ""){
              const mnemonic= await this.props.createWallet(this.state.password);
              ReactLogger(mnemonic)
              this.setState({mnemonic})
            }
    }  

    render() { 
    const {loading,  disable, showModal, password} = this.state 
        return (
            <div >
            <Row type= 'flex' justify='center' align="middle" className=' home-page'>
                <Col span={8} >
                    <div className='home-page_form '  >
                    <h3>Enter password to create wallet</h3>
                        <Input size="large" placeholder="password" type="password" disabled={disable} value={password} onChange={this.inputOnChange}/>
                        <Button type="primary" loading={loading} onClick={this.enterloading} block="true" >Create Wallet</Button>
                        
                    </div>

                    <Modal
                    title= "Mnemonics"
                    visible={showModal}
                    onOk={this.handleCancel} onCancel={this.handleCancel} >

                    //<h2>{this.state.mnemonic}</h2>                    
                    <p>Ensure you write down these words as is. This can be used to recover your password</p>
                    </Modal>
                              
                </Col>
            </Row>             
            </div>
        ); // end-render 
    }
}
 
export default connect(undefined,{createWallet})(Home);


