import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title, body} = post
    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='p-4 border-solid border-2 border-indigo-600 m-8 rounded-lg'>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}>
            <button className='rounded-full bg-emerald-400 p-2'>Show Details</button>
            </Link>
             <button onClick={handleNavigate} className='rounded-full bg-emerald-400 p-2' >Show Details2</button>
        </div>
    );
};

export default Post;