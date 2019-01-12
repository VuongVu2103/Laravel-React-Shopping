import React from 'react'
import ProductsList from './products-list/Page'
import { connect } from 'react-redux';
import { actFetchProducts, actAddToCart } from '../../store/actions/index';
import callApi from '../../utils/apiCaller';


class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      /* 
      - Khởi tạo state với đối tượng products là 1 mảng
      - Create state with products array to store data
      */
    }
  }
  componentWillMount() { 
    callApi('products', 'GET', null).then(res => {
      this.props.fetchAllProducts(res.data);
    })
    /* 
    - Đây là method sẽ được thực thi trước khi 1 component được render trên cả server side và client side.
    - Vì thế nên ta cần gọi API kéo dữ liệu về trước khi các component được render
    - This method will execution before render the component on both server and client side
    - And our job is call API to fetch data to our project before render any component 
    */
  }
  render() {
    let { products} = this.props;
    /* 
    - Chúng ta cần 1 đối tượng để lưu trữ dữ liệu từ props
    - We need a object to store data from props 
    */
    return (
      <div>
        <div className="container">
          {this.showProducts(products)}
          {/* 
            - Ở đây ta chỉ cần gọi action showProducts ra với đối tượng ta đã khai báo ở trên đã chứa đầy đủ dữ liệu cần thiết
            - We call showProducts to with object products that we declare up there , and ofcourse that object store our data
          */}
        </div>
      </div>
    );
  }

  showProducts(products) {
    var result = null;
    var { onAddToCart } = this.props;
    /* 
    - Kiểm tra đối tượng object có dữ liệu bên trong hay không và mapping dữ liệu vào trang ProductsList
    - If the products store data then we mapping that data to ProductsList Page 
    */
    if (products.length > 0) {
      result = products.map((val, index) => {
        return <ProductsList
          products={val}
          key={index}
          index={index}
          onAddToCart={onAddToCart}
        />
      });
    }
    return result;
  }
  onAddToCart(products) {
    this.props.onAddToCart(products);
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: (products) => {
      dispatch(actFetchProducts(products));
    },
    onAddToCart: (products) => {
      dispatch(actAddToCart(products, 1));
    },
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Page);