import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import ReactLogger from './utils/ReactLogger'



import './App.css';

import { Row, Col, Layout, Card, Input, Button } from 'antd';
import Home from './components/Home';

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
        
        ReactLogger(ks)
        ReactLogger(bool)
        return bool
    }
    return (
        <div><Layout>
        <Content>
        
        <Router>
        <Switch>           
            
            <Route exact path = "/" render={()=>{
                return  walletExist() ? (<Redirect to= '/login' />) : (<Home/>)
            }} />        
            <Route path = "/dashboard" component={Dashboard} />        
            <Route path = "/login" component={Login} />        
                    
        </Switch>   
        </Router>
        </Content>
        </Layout>
        </div>  
    ) 
}

// const Home = () =>(
//     <div >
    
//     <Row type= 'flex' justify='center' align="middle" className=' home-page'>
//         <Col span={8} >
//             <div className='home-page_form '  >
//                 <Input size="large" placeholder="password" type="password" />
//                 <Button type="primary"   block= "true" >Create Wallet</Button>
                
//             </div>
                      
//         </Col>
//     </Row>
     
//     </div>
// )

const Login = () =>(
    <div className="login-panel content-backdrop ">
    <h2>Login</h2>   
    </div>
)

const Dashboard = () =>(
    <div>
    <h2>About</h2>
    </div>
)
// <Route exact path="/" render={()=>{
//     this.walletExist() ? (<Redirect to= '/login' />) : (<Home/>)
// }}/>

export default AppRouter ;
