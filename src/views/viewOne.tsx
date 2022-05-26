// import { useState } from "react";
import React, { useState, useEffect } from "react";
import {fetchPosts} from "../actions/postAction";
import {useDispatch, useSelector} from "react-redux";
type Props = {}

const ViewOne: React.FC<Props> = () => {
    const data = useSelector((state: any) => state.posts);
    const dispatch = useDispatch();
    // const fetchPosts = async () => {
    //     try {
    //         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //         const result = await response.json();
    //     // console.log(result);

    //         setData(result);
    //     } catch (error) {
    //         console.log(error);
    //     }

    // }

    useEffect(() => {
    fetchPosts(dispatch);
    }, [])

    return (
        <div className="body">
           <div className="ctn">
           {data.posts.map((post: any) =>(
               <div className="cards">
                   <p className="card-id">{post.id}</p>
                   <h1 className="card-h1">{post.title}</h1>
                   <p className="card-body">{post.body}</p>
               </div>
           ))}
           </div>
        </div>
    );
}

export default ViewOne;