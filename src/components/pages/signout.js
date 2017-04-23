import {connect} from 'react-redux';
import React, {Component} from 'react';
import {signout} from '../../actions/auth';

const Signout = (props) => {
    const onHandleClick = () => {
        props.signout();
    }

    return (
        <button onClick={onHandleClick}>Logout</button>
    )
}

export default connect(null, {signout})(Signout);
