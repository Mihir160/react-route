import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h1 className='text-3xl font-bold'>Friends Details</h1>
            <h2>Details About: {friend.name}</h2>
            <p>Call him/her: {friend.phone}</p>
           <p className='text-2xl font-bold'>Everything you need to know about this person</p> 
        </div>
    );
};

export default FriendsDetails;