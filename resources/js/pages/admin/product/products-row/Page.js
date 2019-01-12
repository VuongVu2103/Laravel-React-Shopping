import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Page extends React.Component {
  constructor (props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete (e) {
    e.preventDefault()
    if (!confirm('Are your sure you want to delete this item?')) {
      return false
    }
    let url = window.Laravel.baseUrl + '/api/admin/products/' + this.props.obj._id
    axios.delete(url)
      .then(response => {
        this.props.deleteRow(this.props.index)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render () {
    return (
      <tr>
        <td>
          {this.props.obj.product_id}
        </td>
        <td>
          {this.props.obj.name}
        </td>
        <td>
          {this.props.obj.price.$numberDouble}
        </td>
        <td>
          {this.props.obj.info.color}
        </td>
        <td>
          {this.props.obj.info.material}
        </td>
        <td>
          <Link className='btn btn-primary' to={'/admin/products/' + this.props.obj._id+'/edit'}>Edit</Link>
        </td>
        <td>
          <button className='btn btn-danger' onClick={this.handleDelete}>Delete</button>
        </td>
      </tr>
    )
  }
}
export default Page
