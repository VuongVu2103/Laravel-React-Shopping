import React from 'react'
import Cart from '../Page'

class Page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      phone:'',
      address:'',
      state:'',
      city:''
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePhone = this.handleChangePhone.bind(this)
    this.handleChangeAddress = this.handleChangeAddress.bind(this)
    this.handleChangeState = this.handleChangeState.bind(this)
    this.handleChangeCity = this.handleChangeCity.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit (e) {
    e.preventDefault()
    let url = window.Laravel.baseUrl + '/api/confirm'
    const data = {
      name: this.state.name,
      phone: this.state.phone,
      address: this.state.address,
      state: this.state.state,
      city:this.state.city
    }
    axios.post(url, data)
      .then(response => {
        this.props.history.push('/admin/confirm')
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
  handleChangePhone (e) {
    this.setState({
      phone: e.target.value
    })
  }
  handleChangeAddress (e) {
    this.setState({
      address: e.target.value
    })
  }
  handleChangeState (e) {
    this.setState({
      state: e.target.value
    })
  }
  handleChangeCity (e) {
    this.setState({
      city: e.target.value
    })
  }
  render() {
    let { item } = this.props;
console.log(item);
    return (
      <div>
         <div className="row">
         {/* <legend>Billing Address</legend> */}
        {/* <div className="col-md-8 col-md-offset-4"> */}
          <form className="form-horizontal" role="form">
            <fieldset>
              {/* Form Name */}
              
              {/* Text input*/}
              <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="textinput">Name</label>
                <div className="col-sm-12">
                  <input type="text" placeholder="Your Name" className="form-control" 
                  value={this.state.name} onChange={this.handleChangeName} required />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="textinput">Phone</label>
                <div className="col-sm-12">
                  <input type="text" placeholder="Phone Number" className="form-control" 
                  value={this.state.phone} onChange={this.handleChangePhone} required />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="textinput">Address</label>
                <div className="col-sm-12">
                  <input type="text" placeholder="Address" className="form-control" 
                  value={this.state.address} onChange={this.handleChangeAddress} required />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="textinput">State</label>
                <div className="col-sm-12">
                  <input type="text" placeholder="State" className="form-control" 
                  value={this.state.state} onChange={this.handleChangeState} required />
                </div>
              </div>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="textinput">City</label>
                <div className="col-sm-12">
                  <input type="text" placeholder="City" className="form-control" 
                  value={this.state.city} onChange={this.handleChangeCity} required />
                </div>
              </div>
            </fieldset>
          </form>
        </div>{/* /.col-lg-12 */}
      </div>
      // </div>
    );

  }

}

export default Page