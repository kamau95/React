import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from "react";

function App(){
    
    const [count, setCount]= useState(0);

    const handleClick= ()=> {
        setCount(count + 1);
    };

    return(
        <>
        <p>{count}</p>
        <ChildComponent handleClick={handleClick}/>
        </>
    );
}

 export default function ChildComponent(props){
    const {handleClick}= props;

    return(
        <>
        <button onClick={handleClick}>keep count up</button>
        </>
    );
}

const container= document.getElementById('root');
const root= ReactDOM.createRoot(container);
root.render(<App/>);