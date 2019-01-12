import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    Dropdown,
    Menu
} from 'semantic-ui-react'
import * as actions from '../../../store/actions';


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = { activeItem: name };
        this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    }


    handleLogout(event) {
        event.preventDefault();
        this.props.dispatch(actions.authLogout());
    }


    render() {

        const { activeItem } = this.state
        this.avatar = (
            <span>
                <img avatar src={require('../../../../images/boy.png')}
                    verticalAlign='top' />
                {this.props.userName}
            </span>
        );
        return (
            <div>
                <div>
                    <section className="banner" role="banner">
                        <header id="header">
                            <div className="header-content clearfix">
                                <nav className="nav">
                                    <ul className="primary-nav">
                                        <Menu.Menu>
                                            <Menu secondary>
                                                <Link to={'/'}><img src={require("../../../../images/logo.png")} /></Link>
                                                <Link to={'/'}><Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} /></Link>
                                                <Link to={'/products'}><Menu.Item name='Products' active={activeItem === 'Products'} onClick={this.handleItemClick} /></Link>
                                                <Link to={'/cart'}><Menu.Item name='Cart' active={activeItem === 'Cart'} onClick={this.handleItemClick} /></Link>
                                            </Menu>
                                        </Menu.Menu>

                                    </ul>
                                </nav>

                                <nav className="navigation" role="navigation">
                                    <ul className="primary-nav">
                                        <Menu.Menu>
                                            <Menu secondary>
                                                {
                                                    this.props.isAuthenticated
                                                        ? <Dropdown trigger={this.avatar} pointing='top right' className='user-dropdown'>
                                                            <Dropdown.Menu className='bounceIn animated'>
                                                                <Dropdown.Item text={"Signed in as " + this.props.userName} disabled key='user' />                                                                
                                                                <Link to={'/cart'}><Dropdown.Item text="Cart" /></Link>
                                                                <Dropdown.Item onClick={this.handleLogout} text="Logout"  key='logout' />
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                        : <Link to={'/login'}><Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} /></Link>
                                                }
                                            </Menu>
                                        </Menu.Menu>
                                    </ul>
                                </nav>
                            </div>
                        </header>
                    </section>
                </div>
            </div>
        );
    }
}

Page.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default Page