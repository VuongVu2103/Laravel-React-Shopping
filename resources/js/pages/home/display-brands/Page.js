import React from 'react'
import axios from 'axios'
class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = { brands: '' }
  }
  componentDidMount() {
    axios.get(window.Laravel.baseUrl + '/api/')
      .then(response => {
        this.setState({brands: response.data })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render() {
    return (
      <div>
        <div className="col-sm-4 portfolio-item"> <a href="/products" className="portfolio-link">
          <div className="caption">
            <div className="caption-content">
              <h3>{this.props.obj.name}</h3>
            </div>
          </div>
          <img src={require("../../../../images/portfolio/"+ this.props.obj.brand_id + "001-2.jpg")} className="img-responsive" /> </a> 
          {/* <img src={require("../../../../images/portfolio/work-1.jpg")} className="img-responsive" /> </a>  */}
          </div>
      </div>
    )
  }
}

export default Page