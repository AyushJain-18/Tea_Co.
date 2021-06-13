import React from 'react';
// react-router
import {Route, Switch, Redirect} from 'react-router-dom';
//redux
import {connect} from 'react-redux';
//user-selector
import {selectCurrentUser} from './reducer/user/user.selector';
//Action
import {HideCart} from './reducer/cart/cart.action'; 
// components
import Homepage from './pages/homepage/homepage';
import ShopComponent from './pages/shop/shop.componnet';
import HeaderComponnets from './components/header/header.components';
import SignInOutLandingComponent from './pages/sign-in-out-landing/sign-in-out.page';
import PreviewSingleItem from './components/shop-page/preview-single-item/preview-single-item.component'
import Checkout from './pages/checkout/checkout.page'
import HeaderContainer from './components/header/Header.container';

class RouteComponent extends React.Component{
    render(){
            return(
                <div>
                    {/* <HeaderComponnets/> */}
                    <HeaderContainer/>
                     <Switch>
                            {/* <Route exact path= "/" component ={Homepage}/> */}
                            <Route exact path ='/preview/:id/' component ={PreviewSingleItem}/>
                            <Route exact path= "/chekout" component ={Checkout}/>
                            <Route path= "/shop" component ={ShopComponent}/>
                            <Route exact path= "/signin" 
                                    render= {()=>this.props.currentUser? (
                                            <Redirect to='/'/>):(<SignInOutLandingComponent/>
                                            )}/>
                            <Route exact path= "/signup"
                                render= { ()=>this.props.currentUser? (
                                    <Redirect to='/'/>):(<SignInOutLandingComponent/>
                                    )}/>
                    </Switch>
                </div>
            )
    }
}
const mapStateToprops = (state)=>({ currentUser: selectCurrentUser(state)});
export default connect(mapStateToprops)(RouteComponent);
