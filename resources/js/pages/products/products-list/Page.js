import React from 'react'
import { connect } from 'react-redux';
import { actAddToCart } from '../../../store/actions/index'
import SkyLight from 'react-skylight';
class Page extends React.Component {
  render() {
    let { products } = this.props;
    return (
      <div>
        <div className="col-md-4" >
          <div className="row m-1">
            <div className="thumbnail">
              <img src={require("../../../../images/portfolio/" + products.product_id + '-1.jpg')} className="img-responsive" />
              <div className="caption">
                <h4 className="pull-right">{products.price.$numberDouble} $</h4>
                <h4>{products.name}</h4>
                <p>ID: {products.product_id}</p>
                <p>Color: {products.info.color}</p>
                <p>Size: {products.info.size}</p>
                <p>Material: {products.info.material}</p>
              </div>
              <div className="btn-ground text-center">
                <a href="#myModal" className="trigger-btn" data-toggle="modal">
                  <button type="button" className="btn btn-primary" onClick={() => this.onAddToCart(products)}>
                    <i className="fa fa-shopping-cart" /> Add To Cart</button>
                </a>
                <button type="button" className="btn btn-primary" onClick={() => this.simpleDialog.show()}>
                  <i className="fa fa-search" /> Quick View
                </button>

                {/* Modal here */}
                {/* Modal Order Confirm */}
                <div id="myModal" className="modal fade">
                  <div className="modal-dialog modal-confirm">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title text-center">Awesome!</h4>
                      </div>
                      <div className="modal-body">
                        <p className="text-center">Your order has been confirmed. Check your cart for details.</p>
                      </div>
                      <div className="modal-footer">
                        <div className="col md-2">
                          <div className="row">
                            <div className="col-sm-12  col-md-6">
                              <button className="btn btn-block btn-light" data-dismiss="modal">Continue Shopping</button>
                            </div>
                            <div className="col-sm-12 col-md-6 text-right">
                              <a href='/cart'><button className="btn btn-lg btn-block btn-success text-uppercase" >Go To Cart</button></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Quick View */}
                <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} >
                  <div className="row m-1">
                    <div className="col-md-6 product_img">
                      <img src={require("../../../../images/portfolio/" + products.product_id + '-1.jpg')} className="img-responsive" />
                    </div>
                    <div className="col-md-6 product_content ">
                      <h2>{products.name}</h2>
                      <h3>$ {products.price.$numberDouble}</h3>
                      <div className="col-md-5">
                        <p ><strong>Products ID:</strong></p>
                        <p ><strong>Color:</strong></p>
                        <p ><strong>Size:</strong></p>
                        <p ><strong>Material:</strong></p>
                        <p ><strong>Shape:</strong></p>
                        <p ><strong>Style:</strong></p>
                        <p ><strong>Functions:</strong></p>
                        <p ><strong>Features:</strong></p>
                        <p ><strong>Warranty:</strong></p>
                      </div>
                      <div className="col-md-7">
                        <p >{products.product_id}</p>
                        <p > {products.info.color}</p>
                        <p > {products.info.size}</p>
                        <p > {products.info.material}</p>
                        <p > {products.info.shape}</p>
                        <p > {products.info.style}</p>
                        <p > {products.info.functions}</p>
                        <p > {products.info.features}</p>
                        <p >{products.info.warranty}</p>
                      </div>
                      <a href="#myModal" className="trigger-btn" data-toggle="modal">
                        <button type="button" className="btn btn-primary" onClick={() => this.onAddToCart(products)}>
                          <i className="fa fa-shopping-cart" /> Buy </button>
                      </a>
                    </div>
                  </div>
                </SkyLight>
                {/* End Model */}
              </div>
              <div className="space-ten" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  onAddToCart(products) {
    this.props.onAddToCart(products);
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product, 1));
    },
  }
}
export default connect(null, mapDispatchToProps)(Page);