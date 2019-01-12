import React from 'react'
import { Dimmer, 
        Header, 
        Loader, 
        Message, 
        Segment} from 'semantic-ui-react'
import {Link, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import ReeValidate from 'ree-validate'
import AuthService from '../../../service'

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new ReeValidate({
            name: 'required|min:3',
            email: 'required|email',
            password: 'required|min:6',
            password_confirmation: 'required|min:6'
        });
        this.state = {
            credentials: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            responseError: {
                isError: false,
                code: '',
                text: ''
            },
            isSuccess: false,
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
        const {credentials} = this.state;
        credentials[name] = value;

        this.validator.validate(name, value)
            .then(() => {
                this.setState({errors, credentials})
            });
    }

    handleSubmit(event) {
        event.preventDefault();

        const {credentials} = this.state;

        this.validator.validateAll(credentials)
            .then(success => {
                if (success) {
                    // Manually verify the password confirmation fields
                    if(this.passwordConfirmation(credentials)){

                        this.setState({
                            isLoading: true
                        });
                        this.submit(credentials);
                    }
                    else{
                        const responseError = {
                            isError: true,
                            code: 401,
                            text: "Oops! Password confirmation didn't match"
                        };
                        this.setState({responseError});
                    }

                }
            });
    }


    passwordConfirmation(credentials){
        if(credentials.password == credentials.password_confirmation){
            return true;
        }
        else{
            return false;
        }
    }

    submit(credentials) {
        this.props.dispatch(AuthService.register(credentials))
            .then((result)  => {
                this.setState({
                    isLoading: false,
                    isSuccess: true,
                    credentials: {
                        name: '',
                        email: '',
                        password: '',
                        password_confirmation: ''
                    },
                    responseError : {
                        isError: false,
                        code: '',
                        text: ''
                    }
                });

            })
            .catch(({error, statusCode}) => {
                const responseError = {
                    isError: true,
                    code: statusCode,
                    text: error
                };
                this.setState({responseError});
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
        if (this.props.isAuthenticated) {
            return <Redirect to='/' replace/>
        }
        const {errors} = this.state;
        return (
            <div>
                    <Segment className='page-loader' style={{display: this.state.isLoading ? 'block' : 'none'}}>
                    <Dimmer active inverted>
                        <Loader size='large'>Registering...</Loader>
                    </Dimmer>
                </Segment>
                    <div className="row">
                        <div className="col-sm-6 mobile-pull">
                            <article role="login">
                            <h3 className="text-center"><i className="fa fa-lock" /> CREATE ACCOUNT</h3>
                            {this.state.responseError.isError && <Message negative>
                            <Message.Content>
                                {this.state.responseError.text}
                            </Message.Content>
                            </Message>}
                            {this.state.isSuccess && <Message positive>
                                <Message.Content>
                                    Registered Successfully ! <a href="#home" aria-controls="home" role="tab" data-toggle="tab"> Login </a> here
                                </Message.Content>
                            </Message>}
                            <form className="signup" method="post">
                                <div className="form-group">
                                <input type="text" 
                                        className="form-control" 
                                        name='name'
                                        placeholder="UserName"  
                                        onChange={this.handleChange}
                                        required/>
                                        {errors.has('name') && <Header size='tiny' className='custom-error' color='red'>
                                    {errors.first('name')}
                                    </Header>}
                                </div>  
                                <div className="form-group">
                                <input type="text"
                                        className="form-control"
                                        name='email' 
                                        placeholder="Email"  
                                        onChange={this.handleChange}
                                        required/>
                                        {errors.has('email') && <Header size='tiny' className='custom-error' color='red'>
                                    {errors.first('email')}
                                    </Header>}
                                </div>                              
                                <div className="form-group">
                                <input type="password"
                                        className="form-control"
                                        name='password'
                                        placeholder="Password" 
                                        onChange={this.handleChange}
                                        required />
                                         {errors.has('password') && <Header size='tiny' className='custom-error' color='red'>
                                    {errors.first('password')}
                                </Header>}
                                </div>
                                <div className="form-group">
                                <input type="password" 
                                        className="form-control" 
                                        name='password_confirmation'
                                        placeholder="Confirm Password"
                                        onChange={this.handleChange}  
                                        required/>
                                         {errors.has('password_confirmation') &&
                                <Header size='tiny' className='custom-error' color='red'>
                                    {errors.first('password_confirmation')}
                                </Header>}
                                </div>                              
                                <div className="form-group">
                                <input type="submit" 
                                        onClick={this.handleSubmit}
                                        className="btn btn-success btn-block" 
                                        defaultValue="SUBMIT" />
                                </div>
                            </form>                  
                            </article>
                        </div>
                        <div className="col-sm-6">
                            <article role="manufacturer"  className="text-center">
                            <h1>WELCOME TO OUR WEBSITE !</h1>
                            <p>Please give us your infomation we need this information so that you can receive access to the site and its content</p>
                            </article>
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