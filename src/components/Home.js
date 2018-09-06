import React, { Component } from 'react';
import PropTypes from "prop-types";

import {connect}  from "react-redux";

import { Row, Col, Layout, Card, Input, Button, Modal, } from 'antd';
import { createWallet } from './../actions/walletAction';
import ReactLogger from '../utils/ReactLogger';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: false, disable: false, showModal: false,
            password:"", mnemonic:'', showRestoreModal:false,
             restoreMnemonic:"", newPassword:"" }
            //ReactLogger(props)
    }

    
     

    enterloading = () =>{
        
        this.setState({loading:true, disable:true})
        this.processWallet();
       setTimeout(()=>{
        this.setState({ showModal: true });        
       }, 1500)
        //Todo: save create Wallet show mnemonic and navigate to dashboard 
    }

    handleOK = (e) => {        
        this.setState({ showModal: false });
        this.props.history.push('/dashboard')
        //ReactLogger(this.props.createWallet)
      }

      handleRestoreOK = async (e) => {        
        await this.processRestoreWallet()
        //Todo: put conditions before redirecting
        this.props.history.push('/dashboard')
        //ReactLogger(this.props.createWallet)
      }

    inputOnChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
    }

    processWallet= async ()=>{
        //Todo: write complex validation code here
        if (this.state.password !== ""){
              const mnemonic = await this.props.createWallet(this.state.password, this.props.tokens);              
              this.setState({mnemonic})
            }
    }  

    restore = ()=>{
        this.setState({showRestoreModal:true})
    }

    processRestoreWallet= async ()=>{
        //Todo: write complex validation code here
        if (this.state.restoreMnemonic !== ""){
              const mnemonic = await this.props.createWallet(this.state.password, this.props.tokens,this.state.restoreMnemonic );          
             }
    } 

    render() { 
    const {loading,  disable, showModal, password, showRestoreModal, newPassword , restoreMnemonic, } = this.state 
    const {TextArea} = Input
        return (
            <div >
            <Row type= 'flex' justify='center' align="middle" className=' home-page'>
                <Col span={8} >
                    <div className='home-page_form '  >
                    <h3>Enter password to create wallet</h3>
                        <Input name="password"  size="large" placeholder="password" type="password" disabled={disable} value={password} onChange={this.inputOnChange}/>
                        <Button type="primary" loading={loading} onClick={this.enterloading} block="true" >Create Wallet</Button>
                        <Button   onClick= {this.restore}>Restore from Mnemonic</Button>
                    </div>

                    <Modal
                    title= "Mnemonics"
                    visible={showModal}
                    onOk={this.handleOK} onCancel={this.handleOK} >

                    <h2>"{this.state.mnemonic}"</h2>                    
                    <p>Ensure you write down these words on paper without the quotes. This can be used to recover your password</p>
                    </Modal>

                    <Modal
                    title= "Restore Accounts"
                    visible={showRestoreModal}
                    onOk={this.handleRestoreOK} onCancel={this.handleRestoreOK} >
                    <TextArea name="restoreMnemonic" rows="4" placeholder="Mnemonic"   value={restoreMnemonic} onChange={this.inputOnChange}/> <br/>
                    <Input name="newPassword" size="large" placeholder=" new password" type="password"  value={newPassword} onChange={this.inputOnChange}/>
                    
                    </Modal>
                              
                </Col>
            </Row>             
            </div>
        ); // end-render 
    }
}

function mapStateToProps(state){
    return {tokens: state.tokens }
}
 
Home.propTypes= {
    createWallet:PropTypes.func.isRequired
}
export default connect(mapStateToProps,{createWallet})(Home);


