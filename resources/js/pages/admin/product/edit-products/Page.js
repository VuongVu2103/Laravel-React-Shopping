import React, { Component } from 'react'
import axios from 'axios'

class Page extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      info:{
        color: '',
        material:'',
      },

    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePrice = this.handleChangePrice.bind(this)
    this.handleChangeInfoColor = this.handleChangeInfoColor.bind(this)
    this.handleChangeInfoMaterial = this.handleChangeInfoMaterial.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    let url = window.Laravel.baseUrl + '/api/admin/products/' + this.props.match.params.id + '/edit'
    axios.get(url)
      .then(response => {
        this.setState(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  handleChangeName (e) {
    this.setState({
      name: e.target.value
    })
  }

  handleChangePrice (e) {
    this.setState({
      price:{
      $numberDouble: e.target.value
      }
    })
  }
  handleChangeInfoColor(e){
    this.setState({
      info:{
        color : e.target.value
      }
    })
  }
  handleChangeInfoMaterial(e){
    this.setState({
      info:{
        material: e.target.value
      }
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    let url = window.Laravel.baseUrl + '/api/admin/products/'+ this.props.match.params.id
    const data = {
      product_id: this.state.product_id,
      name: this.state.name,
      price: this.state.price.$numberDouble,
      info:{
        color: this.state.info.color,
        material: this.state.info.material,
      },
    }
    axios.patch(url, data)
      .then(response => {
        this.props.history.push('/admin/products')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <div>
        <h1>Edit Products</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Products Name</label>
            <input type='text' className='form-control' id='name' placeholder='Name'
              value={this.state.name} onChange={this.handleChangeName} required />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='text' className='form-control' id='price' placeholder='Price'
              value={this.state.price.$numberDouble} onChange={this.handleChangePrice} required />
          </div>
          <div className='form-group'>
            <label >Color</label>
            <input type='text' className='form-control' id='info' placeholder='Color'
              value={this.state.info.color} onChange={this.handleChangeInfoColor} required />
          </div>
          <div className='form-group'>
            <label >Material</label>
            <input type='text' className='form-control' id='material' placeholder='Material'
              value={this.state.info.material} onChange={this.handleChangeInfoMaterial} required />
          </div>
          <div className ="form-group">
            <button type='submit' className='btn btn-primary'>Update Products</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Page