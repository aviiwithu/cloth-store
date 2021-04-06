import { createStore,applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {getproductsReducer} from './reducers/productsReducer';
import { userReducer } from './reducers/userReducer';

const reducer = combineReducers({
    products:getproductsReducer,
    users:userReducer
});

const middleware = [thunk];

const store = createStore( reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;