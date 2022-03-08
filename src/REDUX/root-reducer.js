import { combineReducers } from "redux";

import userReduser from './USER/user.reduser';
import cartReducer from './Cart/cart.reduser';

export default combineReducers({
    user: userReduser,
    cart: cartReducer

});