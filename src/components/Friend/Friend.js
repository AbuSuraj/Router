import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id,name,username,email} = friend;
    return (
        <div className='m-3 p-6 rounded-lg bg-slate-300 w-auto '>
            <h2>name:{name}</h2>
            <h5>email{email}</h5>
            <h4>username:<Link to={`/friend/${id}`}> {username}</Link> </h4>
        </div>
    );
};

export default Friend;