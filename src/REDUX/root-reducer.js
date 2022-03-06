import { combineReducers } from "redux";

import userReduser from './USER/user.reduser';

export default combineReducers({
    user: userReduser
});