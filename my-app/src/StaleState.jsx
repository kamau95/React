import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function LikeButton(){
    const [likes, setLikes]= useState(0);

    function handleLike(){

        setTimeout( ()=>{
            setLikes( prevLikes => prevLikes + 2);
        }, 500);
    };

    return(
        <>
        <button onClick={handleLike}>Likes: {likes}</button>
        </>
    );

}

const container=document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(< LikeButton/>)