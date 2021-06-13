import React ,{useState}from 'react';
import {Link} from 'react-router-dom'

import './header.styles.scss'

//that how we have to import our svg images
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';

import {signOut} from '../../firebase/firebase-auth-method'

// using redux in react
import {connect} from 'react-redux'
import CartIcon from '../cart/cart-icon/cart-icon.component'
import CartDropDown from '../cart/cart-dropdown/card-dropdown.component';

import {selectCartHiddenStatus} from '../../reducer/cart/cart.selector';
import {selectCurrentUser} from '../../reducer/user/user.selector'
import {createStructuredSelector} from 'reselect'

import {HeaderContainer,
        LogoContainer,
        OptionDiv,
        OptionLink,
        OptionsContainer,
        MenuIcon,
        MenuContent
    } from '../header/header.styles'

import {userSignOutStart} from '../../reducer/user/user.action'
const HeaderComponent =({currentUser,hidden, actionSignOutStart,match})=>{
    const [displayMenuClass, setToggleClass]= useState('');
    console.log('match', match)
    const changeToggledState = ()=>{
        if(displayMenuClass){
            setToggleClass('');
            return;
        }
        setToggleClass('toggeled')
    }
return(
    <div class="main-layout">
    <header id="home">
        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="menu-area">
                            <div class="limit-box">
                                <nav class="main-menu">
                                    <ul class="menu-area-main">
                                        <li><a href="./#home">Home</a></li>
                                        <li><a href="./#about">About Us</a></li>
                                        <li><a href="./#OurTeas">Our Tea</a></li>
                                        <li><a href="./#Gifts">Gift</a></li>
                                        <li><a href="/product">Our products</a></li>
                                        <li><a href="./#blog">Blog</a></li>
                                        <li><a href="./#contact">Contact Us</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
         </div>       
    </header>
</div>
)
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHiddenStatus,
    currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch)=>{
    return{
        actionSignOutStart: ()=> dispatch(userSignOutStart())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
