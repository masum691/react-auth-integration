import React from 'react';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div className="text-center">
            <h1>This is Home</h1>
            <h4 style={{textTransform: 'capitalize'}} className="text-warning">{user.displayName}</h4>
        </div>
    );
};

export default Home;