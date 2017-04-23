import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const Header = (props) => {
    const renderLinks = () => {
        if (props.auth.isAuthenticated) {
            return <li className="nav-item pull-right"><Link to="/signout">Sign Out</Link></li>
        } else {
            return [
                <li key={1} className="nav-item pull-right"><Link to="/signin">Sign In</Link></li>,
                <li key={2} className="nav-item pull-right"><Link to="/signup">Sign Up</Link></li>
            ];
        }
    };

    return (
        <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/profile">Profile</Link></li>
                <li className="nav-item"><Link to="/something-else">to something else</Link></li>
                {renderLinks()}
            </ul>
        </nav>
    )
};

const mapStateToProps = (state, props) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(Header);