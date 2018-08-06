import React, { Component } from 'react';

import { Row, Col, Layout, Card, Input, Button } from 'antd';

class Home extends Component {
    state = { loading: false, disable: false   }

    enterloading = () =>{
        this.setState({loading:true})
        //Todo: save create Wallet show mnemonic and navigate to dashboard 
    }



    render() { 
        return (
            <div >
            
            <Row type= 'flex' justify='center' align="middle" className=' home-page'>
                <Col span={8} >
                    <div className='home-page_form '  >
                        <Input size="large" placeholder="password" type="password" disabled={this.state.disable} />
                        <Button type="primary" loading={this.state.loading} onClick={this.enterloading} block="true" >Create Wallet</Button>
                        
                    </div>
                              
                </Col>
            </Row>
             
            </div>
        ); // end-render 
    }
}
 
export default Home;


