import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {selectCartItems} from '../../REDUX/Cart/cart.selectors'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../REDUX/Cart/cart.actions';


import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history ,dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                    cartItems.map(cartItem =>
                    (<CartItem key={cartItem.id} item={cartItem} />
                    ))
                    : (<span className='empty-massage'> YOUR CART IS EMPTY </span>)
            }
        </div>
        <CustomButton onClick={
            () => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}> Go To Checkout
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
