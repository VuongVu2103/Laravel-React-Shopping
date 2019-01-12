import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ProductRow from '../products-row/Page'
import { GridColumn, Grid } from '@progress/kendo-react-grid';

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = { products: '' }
  }
  componentDidMount() {
    axios.get(window.Laravel.baseUrl + '/api/admin/products')
      .then(response => {
        this.setState({ products: response.data })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  deleteRow(key) {
    var products = [...this.state.products];
    products.splice(key, 1);
    this.setState({ products });
  }
  fetchRows() {
    if (this.state.products instanceof Array) {
      return this.state.products.map((object, i) => {
        return <ProductRow obj={object} key={i} index={i} deleteRow={this.deleteRow.bind(this)} />
      })
    }
  }
  onChange(event){
    let target = event.target;
    let value = target.value;
    this.props.onFilterTable(value);
  }

  render() {
    var { filter } = this.setState;
    return (
      <div>
        <h1>Products</h1>
        <div className="col-sm-6 col-sm-offset-3">
          <div id="imaginary_container">
            <div className="input-group stylish-input-group">
              <input type="text" className="form-control" placeholder="Search" 
               onChange= { this.onChange } value= { filter } 
              />
              <span className="input-group-addon">
                <button type="submit">
                  <span className="glyphicon glyphicon-search" />
                </button>
              </span>
            </div>
          </div>
        </div>

        <table className='table table-hover'>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Price</td>
              <td>Color</td>
              <td>Material</td>
            </tr>
          </thead>

          <tbody>
            {this.fetchRows()}
          </tbody>
          <div className='prefix'>
            <Link className='btn btn-success pull-right' to='/admin/products/create'>Add Products</Link>
          </div><br />
        </table>
      </div>
    )
  }
}
export default Page
