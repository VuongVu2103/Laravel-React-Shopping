import React from 'react'


class Page extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1 className="display-3">Thank You!</h1>
                    <p className="lead">Your order was completed successfully . </p>
                    <hr />
                    <p>
                        Having trouble? <a href>Contact us</a>
                    </p>
                    <p className="col-md-6 col-md-offset-3">
                        <a className="btn btn-primary btn-sm" href="/" role="button">Continue to homepage</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Page