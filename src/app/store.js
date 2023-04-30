import { createStore,applyMiddleware } from 'redux' // create store and apply middleware to reducer
import reduxThunk from 'redux-thunk' //Thunks are a standard approach for writing async logic in Redux apps, and are commonly used for data fetching. However, they can be used for a variety of tasks, and can contain both synchronous and asynchronous logic.
import rootReducer from './rootReducer';


const middleware=[reduxThunk];

const store=createStore(rootReducer,applyMiddleware(...middleware));

export default store;