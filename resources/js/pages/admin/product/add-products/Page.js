import React, { Component } from 'react'
import axios from 'axios'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id:'',
      name: '',
      price: '',
      info:{
        color: '',
        material:'',
      },
    }

    this.handleChangeID = this.handleChangeID.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePrice = this.handleChangePrice.bind(this)
    this.handleChangeColor = this.handleChangeColor.bind(this)
    this.handleChangeMaterial = this.handleChangeMaterial.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  handleChangeID(e) {
    this.setState({
      id: e.target.value
    })
  }

  handleChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  handleChangeColor(e) {
    this.setState({
      color: e.target.value
    })
  }

  handleChangeMaterial(e) {
    this.setState({
      material: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let url = window.Laravel.baseUrl + '/api/admin/products'
    const data = {
      id: this.state.product_id,
      name: this.state.name,
      price: this.state.price.$numberDouble,
      color: this.state.info.color,
      material: this.state.info.material
    }
    axios.post(url, data)
      .then(response => {
        this.props.history.push('/admin/products')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    console.log(this.state.product_id)
    return (
      <div>
        <h1>Create Products</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Products Name</label>
            <input type='text' className='form-control' id='name' placeholder='Name'
              value={this.state.name} onChange={this.handleChangeName} required />
          </div>
          <div className='form-group'>
            <label htmlFor='name'>Products ID</label>
            <input type='text' className='form-control' id='id' placeholder='Products ID'
              value={this.state.product_id} onChange={this.handleChangeID} required />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='text' className='form-control' id='price' placeholder='Price'
              value={this.state.price.$numberDouble} onChange={this.handleChangePrice} required />
          </div>
          <div className='form-group'>
            <label htmlFor='color'>Color</label>
            <input type='text' className='form-control' id='color' placeholder='Color'
              value={this.state.info.color} onChange={this.handleChangeColor} required />
          </div>
          <div className='form-group'>
            <label htmlFor='material'>Material</label>
            <input type='text' className='form-control' id='material' placeholder='Material'
              value={this.state.info.material} onChange={this.handleChangeMaterial} required />
          </div>
          <div className="form-group">
            <button type='submit' className='btn btn-primary'>Add Products</button>
          </div>
        </form>
      </div>
    )
  }
}
export default Page