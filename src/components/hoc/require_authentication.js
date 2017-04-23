import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (ComposedComponent) => {
    class Authentication extends Component {
        constructor(props) {
            super(props);
        }

        componentWillMount() {
            const {isAuthenticated} = this.props.auth;
            if(!isAuthenticated) {
                this.props.history.push('/signin');
            }
        }


        render() {
            return (
                <ComposedComponent {...this.props}/>
            )
        }
    }

    function mapStateToProps(state, props) {
        return {
            auth: state.auth
        }
    }

    return connect(mapStateToProps)(Authentication);
};