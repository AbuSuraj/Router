import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const {id, title, body } =post;
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        console.log("hi");
        navigate(`/post/${id}`)
    }
  return (
    <div className="bg-sky-100 m-5 p-6 rounded-2xl">
      <h2 className="text-xl font-bold">{ title}</h2>
      <p>{ body}</p>
      <Link to={`/post/${id}`} ><button className="bg-green-400 m-2 p-2 rounded-3xl hover:bg-slate-400">Show Details</button></Link>
      <button onClick={handleNavigate} className="bg-blue-400 m-2 p-2 hover:bg-slate-300 rounded-3xl">Show More</button>
    </div>
  );
};

export default Post;
