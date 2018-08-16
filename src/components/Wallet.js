import React, { Component } from 'react';
import { connect } from 'react-redux';

class Wallet extends Component {
    constructor(props){
        super(props)
    }

    render() { 
        const {balances} = this.props
        //let htags = <h2> No account here</h2> // add htags
        //if (balances !== undefined) {  htags = balances.map((item, index)=>(<AccountCard key={index} {...item} />))  }
        
        return (<div>
                <h3> Account Overview </h3>
                <div className= "wallet">

                    <div className="card ">
                        <div className="container">
                            <h3 ><b>Account 1</b></h3> 
                            <p className="cash">$345,489,765.00</p> 
                            <h4>0x6Ccab98e98D7c69499890...</h4>
                        </div>
                    </div>
                    <div className="card ">
                    <div className="container">
                        <h3><b>Account 2</b></h3> 
                        <p className="cash">$1,485,000.00</p> 
                            <h4>0x6Ccab98e98D7c69499890...</h4>
                    </div>
                </div>
                <div className="card ">
                        <div className="container">
                            <h3><b>Account 3</b></h3> 
                            <p className="cash">$34.00</p> 
                            <h4>0x6Ccab98e98D7c69499890...</h4>
                        </div>
                    </div>



                </div>
            
            </div>  );
    }
}

function mapStateToProps(state){
    return {
        balances:(state.balances ) ? state.balances : [1,2,3] 
    }
}


const AccountCard = (props)=> (
    <div className="card ">
        <div className="container">
            <h3><b>John Doe</b></h3> 
            <h1>Architect & Engineer</h1> 
            <p></p>
        </div>
    </div>
)

 
export default connect(mapStateToProps)(Wallet) ;