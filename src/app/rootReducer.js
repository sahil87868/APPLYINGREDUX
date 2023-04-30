import { combineReducers } from "redux";

import userReducers from '../feature/user/userReducer';
import contactReducer from '../feature/contact/contactReducer'

const rootReducer=combineReducers({
    user:userReducers,
    contact:contactReducer,
})

export default rootReducer;