import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user} = useFirebase();
    return (
        <div className="nav-link">
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            {user.email && <button className="btn btn-sm btn-danger">Log Out</button>}
            <hr />
        </div>
    );
};

export default Header;