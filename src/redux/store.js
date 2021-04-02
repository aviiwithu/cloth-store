import { createStore,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import {getproductsReducer} from './reducers/productsReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({
    products:getproductsReducer
});

const middleware = [thunk];

const store = createStore( reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;