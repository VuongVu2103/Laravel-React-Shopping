import * as ActionTypes from '../action-types'
import Http from '../../Http'

const user_admin = {
    id: null,
    name: null,
    email: null,
    createdAt: null,
    updatedAt: null
};

const initialState = {
    isAuthenticated : false,
    isAdmin: false,
    user_admin
};

const AdminAuth = (state= initialState,{type,payload = null}) => {
    switch(type){
        case ActionTypes.AUTH_ADMIN_LOGIN:
            return authAdminLogin(state,payload);
        case ActionTypes.AUTH_ADMIN_CHECK:
            return checkAdminAuth(state);
        case ActionTypes.AUTH_ADMIN_LOGOUT:
            return adminLogout(state);
        default:
            return state;
    }
};

const authAdminLogin = (state,payload) => {
    const jwtToken = payload.token;
    const user_admin = payload.user_admin[0];
    if(!!payload.user_admin[0].admin){
        localStorage.setItem('is_admin',true);
    } else {
        localStorage.setItem('is_admin',false);
    }
    localStorage.setItem('jwt_token',jwtToken);
    Http.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
    state = Object.assign({}, state, {
        isAuthenticated: true,
        isAdmin: localStorage.getItem('is_admin') === 'true',
        user_admin
    });
    return state;

};

const checkAdminAuth = (state) =>{
    state =Object.assign({},state,{
        isAuthenticated : !!localStorage.getItem('jwt_token'),
        isAdmin : localStorage.getItem('is_admin'),
    });
    if(state.isAuthenticated){
        Http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt_token')}`;
    }
    return state;
};

const adminLogout = (state) => {
    localStorage.removeItem('jwt_token');
    localStorage.setItem('is_admin',false);
    state = Object.assign({},state,{
        isAuthenticated: false,
        isAdmin : false,
        user_admin
    });
    return state;
};

export default AdminAuth;
