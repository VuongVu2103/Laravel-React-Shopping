import Login from '../pages/login'
import Home from '../pages/home'
import UserList from '../pages/admin/user/user-list';
import addUser from '../pages/admin/user/add-user';
import editUser from '../pages/admin/user/edit-user';
import cart from '../pages/cart';
import Products from '../pages/products';
import productsList from '../pages/admin/product/products-list';
import addProducts from '../pages/admin/product/add-products';
import editProducts from '../pages/admin/product/edit-products';
import Confirm from '../pages/cart/confirm-order';
import Adminhome from '../pages/admin'
import Adminlogin from '../pages/admin/login'
import Thankyou from '../pages/thank-you';
import ForgotPassword from '../pages/forgotPassword'
import ResetPassword from '../pages/resetPassword'



const routes = [
    {
        path: '/',
        exact: true,
        auth: false,
        component: Home
    },
    {
        path: '/login/:social',
        exact: false,
        auth: false,
        component: Home
    },
    {
        path: '/login',
        exact: true,
        auth: false,
        component: Login
    },
    {
        path: '/products',
        exact: true,
        auth: false,
        component: Products
    },
    {
        path: '/cart',
        exact: true,
        auth: true,
        component: cart
    },
    {
        path: '/confirm',
        exact: true,
        auth: false,
        component: Confirm
    },
    {
        path: '/thank',
        exact: true,
        auth: true,
        component: Thankyou
    },
    {
        path: '/admin',
        exact: true,
        auth: false,
        component: Adminlogin
    },
    {
        path: '/admin/home',
        exact: false,
        auth: false,
        component: Adminhome
    },
    {
        path: '/admin/users',
        exact: true,
        auth: false,
        component: UserList
    },
    {
        path: '/admin/users/create',
        exact: true,
        auth: false,
        component: addUser
    },
    {
        path: '/admin/users/:id/edit',
        exact: true,
        auth: false,
        component: editUser
    },
    {
        path: '/admin/products',
        exact: true,
        auth: false,
        component: productsList
    },
    {
        path: '/admin/products/create',
        exact: true,
        auth: false,
        component: addProducts
    },
    {
        path: '/admin/products/:id/edit',
        exact: true,
        auth: false,
        component: editProducts
    },
    {
        path: '/forgot-password',
        exact: true,
        auth: false,
        component: ForgotPassword
    },
    {
        path: '/reset-password/:token/:email',
        exact: true,
        auth: false,
        component: ResetPassword
    },
];
export default routes;