import {createStore,applyMiddleware,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {homeReducer} from './reducers/homeReducer';
import {menReducer} from './reducers/menReducer';
import {womenReducer}from './reducers/womenReducer';
import {childrenReducer} from './reducers/childrenReducer';
import {authReducer} from './reducers/authReducer';
const reducer = combineReducers({
    home:homeReducer,
    men:menReducer,
    women:womenReducer,
    children:childrenReducer,
    user:authReducer,
})


const middleware = [thunk];

const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;