import T from '../types';

export const signin = (email, password) => (dispatch, getState) => {
    dispatch({type: T.START_FETCHING});

    let options = {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {
            "Content-Type": "application/json"
        },
    };

    fetch("/signin", options)
        .then(response => response.json())
        .then(({isAuthenticated, error}) => {
            if (isAuthenticated) {
                dispatch({type: T.SUCCESS_LOGIN});
                dispatch({type: T.CANCEL_FETCHING});
            } else {
                dispatch({type: T.FAILURE_LOGIN, error});
                dispatch({type: T.CANCEL_FETCHING});
            }
        })
        .catch(error => dispatch({type: T.FAILURE_LOGIN, error: error.message}))
};

export const signup = (email, password) => (dispatch, getState) => {
    dispatch({type: T.START_FETCHING});
};

export const signout = () => (dispatch, getState) => {
    dispatch({type: T.START_FETCHING});
    fetch("/signout", {method: 'POST'})
        .then(response => response.json())
        .then(profile => {
            dispatch({type: T.SUCCESS_LOGOUT});
            dispatch({type: T.CANCEL_FETCHING});
        }).catch(error => dispatch({type: T.FAILURE_LOGOUT, error: error.message}));
};
