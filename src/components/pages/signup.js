import {connect} from 'react-redux';
import React, {Component} from 'react';
import {signup} from '../../actions/auth';

const Signup = (props) => {
    return (
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <h2>Please Sign Up</h2>
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
                            props.signup(this.email, this.password)
                        }}>Sign Up
                        </button>
                    </div>

                    <div className="col-md-6">
                        <button className="btn btn-lg btn-primary btn-block" onClick={() => {
                            props.history.push('/signin')
                        }}>Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default connect(null, {signup})(Signup);
