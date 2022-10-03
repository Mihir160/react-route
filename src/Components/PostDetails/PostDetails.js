import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    const {id, title, body, userId} = post

    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h1>Details posts: {id}</h1>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleNavigate}  className='rounded-full bg-emerald-400 p-2'>Get the Author</button>
        </div>
    );
};

export default PostDetails;