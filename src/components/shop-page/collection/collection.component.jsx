import React from 'react'
import './collection.styles.scss';

import {connect} from 'react-redux'
import {selectItem} from '../../../reducer/shop/shop.selector'

import PreviewItems from '../preview-items/preview-items.components'
import {Link} from 'react-router-dom';
import CartIcon from '../../cart/cart-icon/cart-icon.component'
import CartDropDown from '../../cart/cart-dropdown/card-dropdown.component';
import {selectCartHiddenStatus} from '../../../reducer/cart/cart.selector';


const CollectionComponent =({match, categoryItem,hidden})=>{
    console.log('hidden', hidden)
    return(
    <>
    <div className ="collection-page">  
    <div className='title'>
        <Link  to="/">Home</Link>
        <div style= {{fontSize: '44px', color: 'dodgerblue', fontWeight: 'bold'}}> Our Products</div>
        <CartIcon/>
    </div>
    {hidden? null: <CartDropDown/>}
        <div className="items">
            {categoryItem.items.map(item => 
                <PreviewItems key ={item.id} item={item} title={categoryItem.title}/>
            )}
        </div>
    </div>
    </>
    )
}
const mapStateToProps = (state, ownProps)=>{
    return({
        categoryItem: selectItem(ownProps.match.params.categoryId || 'hats' )(state),
        hidden: selectCartHiddenStatus(state),
    })
}
export default connect(mapStateToProps)(CollectionComponent) 