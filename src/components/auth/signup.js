import {connect} from 'react-redux';
import React, {Component} from 'react';
import {signup} from '../../actions/auth';
import {Field, reduxForm} from 'redux-form';
import validate from '../validations/signup';

const renderField = (field) => {
    return (
        <fieldset className="form-group">
            <label>
                {field.meta.touched && field.meta.error &&
                <span className="text-danger">{field.meta.error}</span> || field.label}
            </label>
            <input {...field.input} type={field.type} className={field.className}/>
        </fieldset>
    )
};

class Signup extends Component {

    handleFormSubmit({email, password}) {
        this.props.signup({email, password})
    }

    showServerError() {
        const {error} = this.props.auth;
        if (error) {
            return (
                <div className="alert alert-danger">{error}</div>
            )
        }
    }

    render() {
        const {handleSubmit, invalid, anyTouched} = this.props;
        console.log(this.props);
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field
                    name="email"
                    type="text"
                    className="form-control"
                    label="Email:"
                    component={renderField}
                />
                <Field
                    name="password"
                    type="password"
                    className="form-control"
                    label="Password:"
                    component={renderField}
                />
                <Field
                    name="passwordConfirm"
                    type="password"
                    className="form-control"
                    label="Password Confirm:"
                    component={renderField}
                />

                {this.showServerError()}
                <button action="submit" className="btn btn-primary" disabled={!anyTouched || invalid}>Sign up</button>
            </form>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        auth: state.auth
    }
};

const Form = reduxForm({form: 'signup', validate})(Signup);
export default connect(mapStateToProps, {signup})(Form);
