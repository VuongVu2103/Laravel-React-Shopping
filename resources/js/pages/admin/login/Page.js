import React from 'react';
import PropTypes from 'prop-types'
import {
    Header,
    Segment,
    Dimmer,
    Loader
} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import ReeValidate from 'ree-validate';
import AuthService from '../../../service/'



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
        this.props.dispatch(AuthService.adminlogin(credentials))
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

    componentDidMount() {
        this.setState({
            isLoading: false
        });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/admin/home' } };
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

                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="home">
                            <div className="row">
                                <div className="col-sm-6 mobile-pull">
                                    <article role="login">
                                        <Segment className='page-loader' style={{ display: this.state.isLoading ? 'block' : 'none' }}>
                                            <Dimmer active inverted>
                                                <Loader size='large'>Authenticating...</Loader>
                                            </Dimmer>
                                        </Segment>

                                        <h3 className="text-center"><i className="fa fa-lock" /> LOGIN</h3>
                                        <form className="signup" onSubmit={this.handleSubmit}>

                                            <div className='form-group'>

                                                <input type="text"
                                                    fluid
                                                    name='email'
                                                    className="form-control"
                                                    placeholder="Email"
                                                    onChange={this.handleChange}
                                                    error={errors.has('email')}
                                                    required
                                                />
                                                {errors.has('email') && <Header size='tiny' className='custom-error' color='red'>
                                                    {errors.first('email')}
                                                </Header>}

                                            </div>
                                            <div className='form-group'>
                                                <input type="password"
                                                    name='password'
                                                    className="form-control"
                                                    placeholder="Password"
                                                    onChange={this.handleChange}
                                                    error={errors.has('password')}
                                                    fluid
                                                    required
                                                />
                                                {errors.has('password') && <Header size='tiny' className='custom-error' color='red'>
                                                    {errors.first('password')}
                                                </Header>}
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" className="btn btn-success btn-block" defaultValue="SUBMIT" onClick={this.handleSubmit} />
                                            </div>
                                        </form>
                                    </article>
                                </div>

                                <div class="col-sm-6">
                                    <article role="manufacturer" class="text-center">
                                        <h1>ADMIN PAGE !</h1>
                                        <p>Please login to manage site</p>
                                    </article>
                                </div>

                            </div>
                            {/* end of row */}
                        </div>
                        {/* end of home */}
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