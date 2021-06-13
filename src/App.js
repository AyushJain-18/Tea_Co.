import React, {useEffect}from 'react';
import './App.css';

import {auth} from './firebase/firebase-setup'
import createUserProfileDocument ,{enterShopData} from './firebase/firestore-setup'

import {connect} from 'react-redux'
import {setInitialState, checkUserSession} from './reducer/user/user.action';


import RouteComponent from './routesLazy'
import { EmptyCart } from './reducer/cart/cart.action';

const App =({checkUserSession})=> {
  useEffect(()=>{checkUserSession()},[checkUserSession])

    return (
      <div>
            <RouteComponent/>
      </div>
    );
  }
const mapStateToprops = null;

// this dispatch/satet will be passed in from connect
const mapDispatchToprops = (dispatch)=>{
    return{
      //actionForUserStateChange : (user)=>dispatch(setInitialState(user)),
      emptyCartAction: ()=>dispatch(EmptyCart()),
      checkUserSession: ()=> dispatch(checkUserSession())

      
    }
}
export default  connect(mapStateToprops,mapDispatchToprops)(App);

