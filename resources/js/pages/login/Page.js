import React from 'react';
import PropTypes from 'prop-types'
import {
    Header,
    Button,
    Message,
} from 'semantic-ui-react';
import { Link,Redirect } from 'react-router-dom';
import ReeValidate from 'ree-validate';
import AuthService from '../../service';
import Register from './register';
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new ReeValidate({
            email: 'required|email',
            password: 'required|min:6'
        });

        this.state = {
            credentials: {
                email: '',
                password: ''
            },
            responseError: {
                isError: false,
                code: '',
                text: ''
            },
            isLoading: false,
            errors: this.validator.errors
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const { errors } = this.validator;
        const { credentials } = this.state;
        credentials[name] = value;
        this.validator.validate(name, value)
            .then(() => {
                this.setState({ errors, credentials })
            });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { credentials } = this.state;
        this.validator.validateAll(credentials)
            .then(success => {
                if (success) {
                    this.setState({
                        isLoading: true
                    });
                    this.submit(credentials);
                }
            });
    }
    submit(credentials) {
        this.props.dispatch(AuthService.login(credentials))
            .catch(({ error, statusCode }) => {
                const responseError = {
                    isError: true,
                    code: statusCode,
                    text: error
                };
                this.setState({ responseError });
                this.setState({
                    isLoading: false
                });
            })
    }
    onSocialClick(event, data) {
        window.location.assign(`redirect/${data.service}`);
    }
    componentDidMount() {
        this.setState({
            isLoading: false
        });
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: '/products' } };
        const { isAuthenticated } = this.props;

        if (isAuthenticated) {
            return (
                <Redirect to={from} />
            )
        }
        const { errors } = this.state;
        return (
            <div>
                <div className="login-signup">
                    <div className="row">
                        <div className="col-sm-6 nav-tab-holder">
                            <ul className="nav nav-tabs row" role="tablist">
                                <li role="presentation" className="active col-sm-6">
                                    <a href="#home" aria-controls="home" role="tab" data-toggle="tab">SIGN IN</a>
                                </li>
                                <li role="presentation" className="col-sm-6">
                                    <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">SIGN UP</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="home">
                            <div className="row">
                                <div className="col-sm-6 mobile-pull">
                                    <article role="login">
                                        {this.state.responseError.isError && <Message negative>
                                            <Message.Content>
                                                Login Failed !!! Please check your account or
                                                <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">
                                                    Sign up here
                                                </a>
                                            </Message.Content>
                                        </Message>}
                                        <h3 className="text-center">
                                            <i className="fa fa-lock" /> LOGIN
                                        </h3>
                                        <form className="signup" onSubmit={this.handleSubmit}>
                                            <div className='form-group'>
                                                <input type="text"
                                                    name='email'
                                                    className="form-control"
                                                    placeholder="Email"
                                                    onChange={this.handleChange}
                                                    error={errors.has('email')}
                                                    required
                                                />
                                                {errors.has('email') &&
                                                    <Header size='tiny' className='custom-error' color='red'>
                                                        {errors.first('email')}
                                                    </Header>
                                                }
                                            </div>
                                            <div className='form-group'>
                                                <input type="password"
                                                    name='password'
                                                    className="form-control"
                                                    placeholder="Password"
                                                    onChange={this.handleChange}
                                                    error={errors.has('password')}
                                                    required
                                                />
                                                {errors.has('password') &&
                                                    <Header size='tiny' className='custom-error' color='red'>
                                                        {errors.first('password')}
                                                    </Header>
                                                }
                                            </div>
                                            <Link to='/forgot-password' replace>Forgot your password?</Link>
                                            <div className="form-group">
                                                <input type="submit" className="btn btn-success btn-block" defaultValue="SUBMIT" onClick={this.handleSubmit} />
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-6">Or login with:</div><br />
                                                <Button onClick={this.onSocialClick.bind(this)} service="facebook" className="ui circular facebook icon button">
                                                    <i className="fa fa-facebook" />
                                                </Button>
                                                <Button onClick={this.onSocialClick.bind(this)} service="google" className="ui circular google plus icon button">
                                                    <i className="fa fa-google-plus" />
                                                </Button>
                                            </div>
                                        </form>
                                    </article>
                                </div>
                                <div className="col-sm-6">
                                    <article role="manufacturer" className="text-center">
                                        <h1>WELCOME BACK !</h1>
                                        <p>Please login to shopping</p>
                                    </article>
                                </div>

                            </div>
                            {/* end of row */}
                        </div>
                        {/* end of home */}
                        <div role="tabpanel" className="tab-pane" id="profile">
                            <Register />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Page.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

export default Page;