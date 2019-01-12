import React from 'react'
import CartItem from './cart-item/Page'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actAddToCart, actDeleteProduct } from '../../store/actions';
import { Link } from 'react-router-dom';
import ConfirmOrder from './confirm-order/Page'
class Page extends React.Component {
    render() {
        var { cart } = this.props;
        console.log(cart);
        return (
            <div>
                <form  method="post">
                {/* {this.showCartConfirm(cart)} */}
                <table className='table table-hover'>
                    <div className="col-md-8 ">
                        <thead>
                            <tr>
                                <td></td>
                                <td><strong>Product</strong></td>
                                <td><strong>Available</strong></td>
                                <td><strong>Quantity</strong></td>
                                <td><strong>Price</strong></td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showCartItem(cart)}

                        </tbody>
                    </div>
                    <div className="col-md-4 ">
                        <ConfirmOrder />
                        <tr>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td >Sub-Total</td>
                            <td className="text-right">{this.showTotalAmount(cart)} €</td>
                        </tr>
                        <tr>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td>Shipping</td>
                            <td className="text-right">7.00 €</td>
                        </tr>
                        <tr>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td><strong>Total</strong></td>
                            <td className="text-right"><strong>{this.showTotalAmount(cart) + 7} €</strong></td>
                        </tr>
                    </div>
                </table>
                <div className="col md-2">
                    <div className="row">
                        <div className="col-sm-12  col-md-6">
                            <Link to="/products"><button className="btn btn-block btn-light">Continue Shopping</button></Link>
                        </div>
                        <div className="col-sm-12 col-md-6 text-right">
                            <Link to="/thank"><button type ='submit' className="btn btn-lg btn-block btn-success text-uppercase" >Checkout</button></Link>
                        </div>
                    </div>
                </div>
                </form>
            </div>

        );
    }
    showCartItem() {
        let { cart } = this.props;
        var { onDeleteProduct } = this.props;
        console.log(cart);
        let result = null;
        if (cart.length > 0) {
            result = cart.map((val, index) => {
                return <CartItem
                    key={index}
                    item={val}
                    index={index}
                    onDeleteProduct={onDeleteProduct} />
            });
        }

        return result;

    }
    showTotalAmount(cart) {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].products.price.$numberDouble * cart[i].quantity + 6, 9;
            }
        }
        return total;
    }
}

Page.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        products: PropTypes.shape({
            name: PropTypes.string.isRequired,
            // price: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}


const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProduct: (products) => {
            dispatch(actDeleteProduct(products));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
// export default Page;