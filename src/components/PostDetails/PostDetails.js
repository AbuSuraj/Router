import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body,userId} = post
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h1>PostDetails: {id}</h1>
            <h2>{ title}</h2>
            <p>{body}</p>
            <button onClick={handleNavigate}>Author</button>
        </div>
    );
};

export default PostDetails;