import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect,Link} from 'react-router-dom';
import ReactLogger from './utils/ReactLogger'



import './App.css';

import { Row, Col, Layout, Card } from 'antd';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

const {  Content } = Layout;


const AppRouter  = () => {

    const walletExist= ()=>{
        let bool 
        //Todo: check if wallet exist then load to redux store and navigate to password page
        const ks = localStorage.getItem("ks")
        if(ks == null){ bool= false
         }
        else {bool = true;
        //Todo: load to store
        }
       
        return bool
    }
    return (
        <div ><Layout> <Content>
        
        <Router>
        <Switch> 
                  
         <Route exact path = "/" render={(props)=>{
            return  walletExist() ? (<Redirect to= '/login' />) : (<Home {...props}/>)
         }} />
       
            <Route path = "/dashboard" component={Dashboard} />        
            <Route path = "/login" component={Login} />        
            <Route  component={Dashboard} />   
        </Switch>   
        </Router>
        
        </Content></Layout>
        </div>  
    ) 
}



const Login = ({history}) =>(
    <div className="login-panel content-backdrop ">
    <h2>Login</h2>
    <Link to='/dashboard'  />   
    </div>
)


export default AppRouter ;
