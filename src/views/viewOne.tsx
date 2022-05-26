// import { useState } from "react";
import React, { useEffect, useState } from "react";
import { fetchPosts } from "../actions/postAction";
import { useDispatch, useSelector } from "react-redux";

type Props = {}

const ViewOne: React.FC<Props> = () => {
    const data = useSelector((state: any) => state.posts);
    const [value, setValue] = useState(1800)

    // handleOnInpput
    const handleOnInpput = (e: any) => {
        const out:number = e.target.value;
        window.scrollTo({left: 0, top: out, behavior: 'smooth'});
        setValue(e.target.value)
    }
    const dispatch = useDispatch();
    // get input by id
    const slider = document.getElementById("slider");
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
       
    }, []);

    const scroll = () => {
      
    }
    // }, [])

    return (
        <div className="body">
            <div className="header">
                <h1>Bima's Yeebox Interview Test</h1>
                <h3>Technology, Tools & Languages used</h3>
                <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Typescript</li>
                </ul>
            </div>
            <div className="ctn">
                {data.posts.map((post: any) => (
                    <div className="cards">
                        <p className="card-id">{post.id}</p>
                        <h1 className="card-h1">{post.title}</h1>
                        <p className="card-body">{post.body}</p>
                    </div>
                ))}
            </div>
            <div className="slidecontainer">
                <input onInput={handleOnInpput} type="range" name="ranger" min="0" max="7800" value={value} className="slider" id="myRange" />    
            </div>
        </div>
    );
}

export default ViewOne;