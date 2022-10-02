import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
           <h1 className='text-center font-bold text-xl'>a total {posts.length} of posts are here</h1> 
           <div className='grid grid-cols-1 md:grid-cols-3'>
            {
                posts.map(post=> <Post
                key={posts.id}
                post ={post}
                ></Post>)
            }
           </div>
        </div>
    );
};

export default Posts;