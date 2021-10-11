import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h3>Please register</h3>
            <form action="">
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/login">Already Register?</Link>
        </div>
    );
};

export default Register;