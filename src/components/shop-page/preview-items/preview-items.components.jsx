import React from 'react';
import './preview-items.styles.scss'

import CustumButton from '../../CustumComponents/CustumButon/custumButton.component';
import {withRouter, Link} from 'react-router-dom'

import {connect} from 'react-redux';
import {AddItemToCart} from '../../../reducer/cart/cart.action';
import {ReactComponent as ShoppingBagIcon} from '../../../assets/shopping-bag.svg'

const PreviewItems =({item ,history,title, key, AddItemToCartAction})=>{
    let name = ['Silver Green Darjeeling Tea', 'Smoky Darjeeling Tea', 'First Flush Darjeeling Tea'];
    let price = ['Rs. 635.00', 'Rs. 435.00', 'Rs. 499.00'];
    let images = ['Our_Tea1.png', 'OurTea2.png','OurTea3.png']
    const {id} = item
    return (
    <div className="collection-item">
        <Link
         className="item-image"
            style ={{
                backgroundImage : `url('/images/${images[id%3]}')`
            }}
        />
        <div className="collection-footer">
            <div>{`${name[id%3]} - ${id}`}</div>
            <div>{price[id%3]}</div>
            <div className="cart-add-icon" >
                <ShoppingBagIcon className ="shopping-add-icon" onClick ={()=>AddItemToCartAction(item)}>
                </ShoppingBagIcon>
        </div>
        </div>
        <CustumButton className ='custom-button' inverted onClick ={()=>AddItemToCartAction(item)}> Add to Cart</CustumButton>
        {/* <button onClick ={()=>history.push('/AddToCart')}>Add to cart</button> */}
    </div>
    ) 
}
const mapDespatchToprops= (dispatch)=>{
    return{
        AddItemToCartAction: (item)=>{
            dispatch(AddItemToCart(item))
        } 
    }
    
}
export default  connect(null,mapDespatchToprops)(PreviewItems)  ; 