import React, { Component } from 'react';
import { Layout, Input, Button, Menu, Icon, Col, Row } from 'antd';

import {connect}  from "react-redux";

import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';

import {Link} from 'react-router-dom';
import Home from './Home';

import logo from "../img/coin.png"
import online from "../img/online.png"
import ReactLogger from '../utils/ReactLogger';
import Wallet from './Wallet';

const { Header, Sider, Content } = Layout;

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed:false, current:null }
    }

    componentDidMount() {
        this.props.history.push(this.props.match.url+'/wallet')
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }

    handleMenuClick = (e) => {
        ReactLogger(this.props.match)
        this.setState({
          current: e.key,
        });
      }
    dashNav =(e)=>{
          ReactLogger("click wanna play again")
          ReactLogger(e.key)
          const url = this.props.match.url;

          this.props.history.push(`${url}/${e.key}`)
          
      }

      logout = ()=>{
        this.props.history.push('/login')         
      }
      checkStore = () =>ReactLogger(this.props.state)

    render() { 
        const {match} = this.props;
        return ( 
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed} 
                    >

                    <div className="logo" >
                    <img src={logo}/> <h3>KryptoNite</h3>
                    </div>

                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
                      <Menu.Item key="wallet" onClick={this.dashNav} >
                        <Icon type="pie-chart" />
                        <span>Wallets</span>
                      </Menu.Item>
                      <Menu.Item key="topic" onClick={this.dashNav}>
                        <Icon type="user" />
                        <span>Topic</span>
                      </Menu.Item>
                      <Menu.Item key="transfer" onClick={this.dashNav}>
                        <Icon type="swap" />
                        <span>Transfer</span>
                      </Menu.Item>
                      <Menu.Item key="3" onClick={this.logout}>
                        <Icon type="logout" />
                        <span>Logout</span>
                      </Menu.Item>

                      <Menu.Item key="4" onClick={this.checkStore}>
                        <Icon type="logout" />
                        <span>store</span>
                      </Menu.Item>

                    </Menu>
                </Sider>

                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                        />
                         <img src={online}/>
                       

                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                   
                    <div>
                        <Route path = {match.url+"/wallet"} component={Wallet} />        
                        <Route path = {match.url + "/topic"} component={Topic} />
                        <Route path = {match.url + "/transfer"} component={Transfer} />     
                    </div>
                      
                    
                    </Content>
                </Layout>
            </Layout> 
        );
    }
}

    



const Topic = () =>(
    <div className="login-panel content-backdrop ">
    <h2>Topic</h2>   
    </div>
)

const Transfer = () =>(
    <div className="login-panel content-backdrop ">
    <h2>Transfer</h2>   
    </div>
)
function mapStateToProps(state){
    return {state}
} 

export default connect(mapStateToProps)(Dashboard);