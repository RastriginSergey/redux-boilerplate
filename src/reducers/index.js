import T from '../types';
import {reducer as form} from 'redux-form';
import {combineReducers} from 'redux';

function auth(state = {}, action) {
    switch (action.type) {
        case T.AUTH_USER:
            return {isAuthenticated: true, error: ''};
        case T.UNAUTH_USER:
            return {isAuthenticated: false, error: ''};
        case T.AUTH_ERROR:
            return {isAuthenticated: action.isAuthenticated, error: action.error};
        default:
            return state;
    }
}


export default combineReducers({
    auth,
    form
});