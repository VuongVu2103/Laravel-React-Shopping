import * as ActionTypes from '../action-types'

export function authLogin(payload){
    return {
        type: ActionTypes.AUTH_LOGIN,
        payload
    }
}

export function authLogout(){
    return {
        type: ActionTypes.AUTH_LOGOUT
    }
}

export function authCheck(){
    return {
        type:ActionTypes.AUTH_CHECK
    }
}

export function authAdminLogin(payload){
    return {
        type: ActionTypes.AUTH_ADMIN_LOGIN,
        payload
    }
}

export function authAdminLogout(){
    return {
        type: ActionTypes.AUTH_ADMIN_LOGOUT
    }
}

export function authAdminCheck(){
    return {
        type:ActionTypes.AUTH_ADMIN_CHECK
    }
}

export const actFetchProducts = (products) => {
    return {
        type: ActionTypes.FETCH_PRODUCTS,
        products
    }
}

export const actAddToCart = (products,quantity) =>{
    return {
        type : ActionTypes.ADD_TO_CART,
        products,
        quantity
    }
}

export const actCheckOut = (products,quantity) =>{
    return {
        type : ActionTypes.CHECKOUT_PRODUCT,
        products,
        quantity
    }
}

export const actDeleteProduct = (products) => {
    return{
        type: ActionTypes.DELETE_PRODUCT,
        products,
    }
}

export const filterTable = (filter) => {
    return {
        type : ActionTypes.FILTER_TABLE,
        filter
    }
}