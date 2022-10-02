import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div className='mx-auto ml-5'>
            <h3>I have so many friends: {friends.length}</h3>
           <div className='grid grid-cols-2 md:grid-cols-3'>
           {
                friends.map(friend => <Friend
                key={friend.id}
                friend ={friend}
                ></Friend>)
            }
           </div>
        </div>
    );
};

export default Friends;