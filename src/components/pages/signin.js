import {connect} from 'react-redux';
import React, {Component} from 'react';
import {signin} from '../../actions/auth';

const Signin = (props) => {
    return (
        <div>
            <h2>Please Sign In</h2>
            <div className="form-group">
                <input type="text" name="email" className="form-control input-lg" ref={(input) => {
                    this.email = input;
                }}/>
            </div>

            <div className="form-group">
                <input type="password" name="password" className="form-control input-lg" ref={input => {
                    this.password = input;
                }}/>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <button className="btn btn-lg btn-success btn-block" onClick={() => {
                        props.signin(this.email.value, this.password.value);
                    }}>Sign In
                    </button>
                </div>

                <div className="col-md-6">
                    <button className="btn btn-lg btn-primary btn-block" onClick={() => {
                        props.history.push('/signup')
                    }}>Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
};


export default connect(null, {signin})(Signin);
