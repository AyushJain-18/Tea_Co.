import React from 'react'
import './checkout.styles.scss';

import {RemoveItem} from '../../reducer/cart/cart.action'
import {connect} from 'react-redux';

import {AddItemToCart, deacreaseCartQuantity} from '../../reducer/cart/cart.action';

const  CheckoutComponent =({cartItem, addItemToCart, removeItemFromCart,deacreaseCartQuantity})=>{
        const{id,quantity} =cartItem
        let name = ['Silver Green Darjeeling Tea', 'Smoky Darjeeling Tea', 'First Flush Darjeeling Tea'];
        let price = [635.00,  435.00, 499.00];
        let images  = ['Our_Tea1.png', 'OurTea2.png','OurTea3.png']
        let imageUrl=`/images/${images[id%3]}`
        return(
            <div className= "checkout-item">
                <div className='image-container'>
                        <img src={imageUrl}alt=""/>
                </div>
                <span className='name'>{`${name[id%3]} - ${id}` }</span>
                <div className='quantity'>
                        <div className='arrow' onClick ={()=> deacreaseCartQuantity(cartItem)}>&#10094;</div>
                        <span className = 'value'> {quantity} </span>
                        <div className='arrow' onClick ={()=> addItemToCart(cartItem)}>&#10095;</div>
                </div>
                <span className='price'>{price[id%3] *quantity}</span>
                <div className='remove-button' onClick ={()=>removeItemFromCart(cartItem)}>
                    &#10005;</div>
            </div>  
        )
    }
const mapDispatchToProps =(dispatch)=>{
    return({
        removeItemFromCart: (item)=>dispatch(RemoveItem(item)),
        addItemToCart: (item)=>dispatch(AddItemToCart(item)),
        deacreaseCartQuantity: (item)=>dispatch(deacreaseCartQuantity(item))
    })
}
export default connect(null,mapDispatchToProps)(CheckoutComponent);