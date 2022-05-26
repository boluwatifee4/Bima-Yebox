import { GET_POSTS } from "./types";

export const fetchPosts = async (dispatch) => {
    console.log("fetchPosts");
    try {
        const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                }
                });
        const response = await fetchData.json();
        // console.log("response", response);
        dispatch({
            type: GET_POSTS,
            payload: response
        })
    } catch (error) {
        console.log("eer",error);
    }
}