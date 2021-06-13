import React ,{lazy,Suspense} from 'react';
// react-router
import {Route, Switch, Redirect} from 'react-router-dom';
//redux
import {connect} from 'react-redux';
//user-selector
import {selectCurrentUser} from './reducer/user/user.selector';
//Action
import {HideCart} from './reducer/cart/cart.action'; 
// components
// import Homepage from './pages/homepage/homepage';
// import ShopComponent from './pages/shop/shop.componnet';
import SignInOutLandingComponent from './pages/sign-in-out-landing/sign-in-out.page';
import PreviewSingleItem from './components/shop-page/preview-single-item/preview-single-item.component'
import Checkout from './pages/checkout/checkout.page'
import HeaderContainer from'./components/header/Header.container';
import Spinner from './components/CustumComponents/spinner/spinner.component';
import ErrorBoundary from './components/CustumComponents/ErrorBoundary/errorBoundaries';
import ErrorComponent from './components/CustumComponents/error.componenr';

const Homepage = lazy(()=>import('./pages/homepage/homepage'));
const ShopComponent = lazy(()=>import('./pages/shop/shop.componnet'))

class RouteComponent extends React.Component{
    render(){
        let a = 10;
            return(
                <div>
                    
                     {/* <Suspense fallback = {<div>...loading</div>}> */}
                    
                    <ErrorBoundary>
                     <Suspense fallback = {<Spinner/>}>
                         {/* <ErrorComponent/> */}
                         {/* <HeaderContainer/> */}
                         <Switch>
                              <Route exact path= "/" component ={Homepage}/>
                              <Route exact path= "/product" component ={ShopComponent}/>
                              <Route exact path ='/preview/:id/' component ={PreviewSingleItem}/>
                              <Route exact path= "/chekout" component ={Checkout}/>
                              <Route exact path= "/signin" 
                                    render= {()=>this.props.currentUser? (
                                            <Redirect to='/'/>):(<SignInOutLandingComponent/>
                                            )}/>
                              <Route exact path= "/signup"
                                 render= { ()=>this.props.currentUser? (
                                    <Redirect to='/'/>):(<SignInOutLandingComponent/>
                                    )}/>
                    </Switch>
                    <footer>
                        <div class="footer layout_padding">
                            <div class="container">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-6 col-sm-12">
                                            <h3>Contact Us</h3>
                                            <p>S.P. Jain Institute of Management and Research<br/><br/>(+91) 987 654 3210<br/><br/>demo@gmail.com</p>
                                        </div>
                                        <div class="col-lg-9 col-md-6 col-sm-12">
                                            <div class="mapouter"><div class="gmap_canvas"><iframe title = "a" class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=700&amp;height=230&amp;hl=en&amp;q=S.P.jain&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                                </iframe><a href="https://www.bgmi.org/">BGMI</a></div></div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                 </footer>
                </Suspense>
               </ErrorBoundary> 
            </div>
            )
    }
}
const mapStateToprops = (state)=>({ currentUser: selectCurrentUser(state)});
export default connect(mapStateToprops)(RouteComponent);




/*{
  import {Routerhomepage,Title,TopicDetails} from './pages/RouterExmaple/Router';
   <Switch>
            <Route exact path ="/" component={Routerhomepage}/>
            <Route exact path ="/title" component={Title}/>
            <Route exact ={false} path ="/Title/:titleID" component={TopicDetails}/>
        </Switch> */

// Swith Route link

// React-router Basic Example

//  {/* first set is with exact path matching */}
//  <Route exact path ="/" component={Routerhomepage}/>
//  <Route exact path ="/title" component={Title}/>
//  <Route exact path ="/Title/:titleID" component={TopicDetails}/> 


//  {/* this set is without exact path matcing */}
//  <Route path ="/" component={Routerhomepage}/>
//  <Route path ="/title" component={Title}/>
//  <Route path ="/Title/:titleID" component={TopicDetails}/>