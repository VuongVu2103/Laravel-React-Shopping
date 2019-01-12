import React from 'react'
import AuthService from '../../service'
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom';


class Page extends React.Component {
//   constructor (props) {
//     super(props);
// }

  render () {
    return ( 
      <div>
            {/* portfolio grid section */}
            <h1>Admin page</h1>
            <nav className='navbar navbar-default navbar-static-top'>
          <div className='container'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#app-navbar-collapse' aria-expanded='false'>
                <span className='sr-only'>Toggle Navigation</span>
                <span className='icon-bar' />
                <span className='icon-bar' />
                <span className='icon-bar' />
              </button>
            </div>
            <div className='collapse navbar-collapse' id='app-navbar-collapse'>
              <ul className='nav navbar-nav'>
                <li><Link to='/admin/users'>Users</Link></li>
                <li><Link to='/admin/products'>Products</Link></li>
                <li><Link to='/admin/order'>Order</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <div className='container'>
          {this.props.children}
        </div> */}
        </div>
    );
  }
}

export default Page