import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="nav-link">
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <button className="btn btn-sm btn-danger">Log Out</button>
            <hr />
        </div>
    );
};

export default Header;