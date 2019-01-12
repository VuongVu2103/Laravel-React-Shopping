import {combineReducers} from 'redux'
import Auth from './Auth'
import AdminAuth from './AdminAuth'
import persistStore from './persistStore'
import products from './products';
import cart from './cart';
import checkout from './checkout';
import FilterTable from './FilterTable';

const RootReducer = combineReducers({
    AdminAuth,
    Auth,
    persistStore,
    products,
    cart,
    checkout,
    FilterTable
});

export default RootReducer;