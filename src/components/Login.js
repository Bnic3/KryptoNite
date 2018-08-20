import React, { Component } from 'react';
import { Row, Col, Input, Button, message } from 'antd';
import ReactLogger from '../utils/ReactLogger';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { dashLogin, createWallet } from './../actions/walletAction';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {password:"",mnemonic:"", newPassword:"",restoreMnemonic:"" }
    }

    inputOnChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        }

    restore=async ()=>{
        const {restoreMnemonic}= this.state;
        const mnemonic = await this.props.createWallet(this.state.password, this.props.tokens);
        this.props.history.push('/dashboard')   
        //ReactLogger(mnemonic)
    }
    login = async ()=>{
        const {password}= this.state;
        if (password != ""){
            const response = await this.props.dashLogin(password)
           
            response ? this.props.history.push('/dashboard'):message.error("Wrong password. Try again!")
        }

        //ReactLogger(password)
    }
    
    render() { 
        const {TextArea} = Input
        const {password, mnemonic, restoreMnemonic, newPassword} = this.state
        
        return ( 
            <div className="homediv">
            <div className="login-panel content-backdrop ">
                <h2>Login</h2>
                <Link to='/dashboard'> Dashboard</Link>
                <Link to='/'> Home</Link>
            </div>


            <Row type= 'flex' justify='center' align="middle" className=' home-page'>
                <Col span={8} >
                    <div className='home-page_form '  >
                    <h3>Login</h3>
                        <Input name="password" size="large" placeholder="password" type="password"  value={password} onChange={this.inputOnChange}/>
                        <Button type="primary"  onClick={this.login} block="true" >Login</Button>
                        
                    </div>
         
                </Col>
            </Row>

            <Row type= 'flex' justify='center' align="middle" className=' home-page'>
                <Col span={8} >
                    <div className='home-page_form '>
                    <h3>Mnemonic</h3>
                        <TextArea name="restoreMnemonic" rows="4" placeholder="Mnemonic"   value={restoreMnemonic} onChange={this.inputOnChange}/>
                        <Input name="newPassword" size="large" placeholder=" new password" type="password"  value={newPassword} onChange={this.inputOnChange}/>
                        <Button type="primary"  onClick={this.restore} block="true" >Restore</Button>
                        
                    </div>
         
                </Col>
            </Row>
            
            
            </div>
         );
    }
}
 
export default connect(undefined,{dashLogin,createWallet})(Login);