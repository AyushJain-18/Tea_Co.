import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stipe-pay-now.styles.scss'

class  PayNowComponent extends React.Component{ 
    constructor(props){
        super(props)
        this.state={
            showDefaultCreditCard: true
        }
    }
    priceInScent = this.props.price*100;
    publishableKey ='pk_test_4b9bCmmYb4mUbXuV6ygdQE4u00Hzn49rYV';
    onToken =token=>{
        alert('Payement Successfull');
    }
    render(){
 
    return(
        <div style={{padding: '50px'}}>
            <div className = "warning-text">
                <p> Card: 4242 4242 4242 4242  CVV - 123 Expiry Date -01/21
                </p>        
            </div>  
            <div className ="stripeButton">
                <StripeCheckout
                label='Pay Now'
                name ='CRWN Clothing Ltd.'
                billingAddress
                shippingAddress
                image = '/favicon.ico'
                description= {`Your total price is ${this.props.price}`}
                amount ={this.priceInScent}
                token ={this.onToken}
                stripeKey= {this.publishableKey}
                opened={this.onOpened}
                closed={this.onClosed}
                />
            </div>
        </div>
    )
 }
}

export default PayNowComponent;