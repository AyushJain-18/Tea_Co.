import React from 'react';
import './cart-items.styles.scss';
class CartItemComponent extends React.Component{
    render(){
        const{id, quantity} = this.props.item;
        let name = ['Silver Green Darjeeling Tea', 'Smoky Darjeeling Tea', 'First Flush Darjeeling Tea'];
        let price = ['Rs. 635.00', 'Rs. 435.00', 'Rs. 499.00'];
        let images = ['Our_Tea1.png', 'OurTea2.png','OurTea3.png']
        return(
            <div className ="cart-item">
                <img  className = "cart-item-image" src={`/images/${images[id%3]}`} alt={name}/>
                <div className="cart-item-details">
                <span className ="name">{`${name[id%3]} - ${id}`}</span>
                <span>{quantity} x ${price[id%3]}</span>
                </div>
            </div>
        )
    }
}
export default  CartItemComponent;