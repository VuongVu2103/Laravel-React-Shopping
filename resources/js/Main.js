import React, { Component } from 'react'
import Footer from './pages/common/Footer'
import {connect} from 'react-redux'
import Navigation from './pages/common/navigation';
class Main extends React.Component {
  constructor(props) {
    super(props);
}



  render () {
    return (
          <div>
            <Navigation />
              <div className="container">

                <section id="hero" className="section ">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 col-sm-6 hero">
                        <div className="hero-content">
                          <h1>S a i G o n <br /> W a t c h e s</h1>
                        </div>
                      </div>
                      <div className="col-md-5 col-sm-6 hero">
                        <div className="hero-content">
                          <p>A shop of watches made by SGU student </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {this.props.children}

                </div>
                <Footer />
            </div>
            );
        }
    }
const mapStateToProps = (state) => {
      return {
          isAuthenticated: state.Auth.isAuthenticated
      }
  };
  
  export default connect(mapStateToProps)(Main);