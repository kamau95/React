import React from 'react';
import ReactDOM from "react-dom/client";
import { useState } from 'react';

function Counter({initialCount}){
    const [count, setCount]= useState(initialCount);


    return(
        <>
        count: {count};
        <button onClick={ ()=> setCount(initialCount)}>Reset</button>

        <button onClick={ ()=> setCount( (prevCount) => prevCount - 1)}>Decrement</button>

        <button onClick={ ()=> setCount( count + 1)}>Increment</button>
        <button onClick={ ()=> setCount( (prevCount) => prevCount - 1)}>Decrement</button>

        <button onClick={ ()=> setCount( (prevCount)=> prevCount + 1)}>Increment2</button>
        </>
    );
}

const container= document.getElementById('root');
const root= ReactDOM.createRoot(container);
root.render( <Counter initialCount={0}/>)