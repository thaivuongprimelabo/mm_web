import React, { Component } from 'react';

export default class App extends Component {

    _onClick = () => {
        alert('_onClick');
    }

    render() {
        return (
            <div className="login-box login-frm">
                <div className="login-logo">
                    <a href="#"><b>MM</b>Server</a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Welcome to my MM Server</p>
                    <form  method="POST" action="#">
                        <div className="form-group has-feedback">
                            <input type="text" name="loginid" className="form-control" placeholder="Login id" autoFocus />
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" name="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="row">
                            <div className="col-md-8"></div>
                            <div className="col-md-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}