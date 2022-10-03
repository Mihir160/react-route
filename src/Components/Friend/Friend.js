import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id,name, email, username} = friend
    return (
        <div className='p-4 border-solid border-2 border-indigo-600 m-8 rounded-lg'>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            <p><small>userName: <Link to={`/friend/${id}`}>{username}</Link> </small></p>
        </div>
    );
};

export default Friend;