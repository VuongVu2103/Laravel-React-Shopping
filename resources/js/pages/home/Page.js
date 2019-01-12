import React from 'react'
import AuthService from '../../service'
import Display from './display-brands/Page'
import axios from 'axios'

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brands: '' }
  }
  componentDidMount() {
    axios.get(window.Laravel.baseUrl + '/api/')
      .then(response => {
        this.setState({ brands: response.data })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  fetchRows() {
    if (this.state.brands instanceof Array) {
      return this.state.brands.map((object, i) => {
        return <Display obj={object} key={i} index={i} />
      })
    }
  }
  render() {
    return (
      <div>
        <section id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <hr className="section" />
              </div>
            </div>
            {this.fetchRows()}
          </div>
        </section>
      </div>
    );
  }
}

export default Page;