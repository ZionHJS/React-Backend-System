import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './login.scss';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="top">
                    <div className="container">
                        <div className="logo-wrap">
                            <Link className="logo" to="/">
                                
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="main-bd"></div>
                <div className="main-ft"></div>
            </div>
        );
    }
}

export default Login;