import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user, logOut} = useFirebase();
    return (
        <div className="nav-link">
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <span className="text-dark fs-6 me-2 fw-normal">{user.displayName}</span>
            <img src={user.photoURL} alt="" />
            {user.email && <button onClick={logOut} className="btn btn-sm btn-danger">Log Out</button>}
            <hr />
        </div>
    );
};

export default Header;