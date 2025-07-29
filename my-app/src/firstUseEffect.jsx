import React from "react";
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from "react";

export default function App(){
    const[count, setCount]= useState(0);
    const [data, setData]= useState(null);
    
    //on every render
    useEffect( ()=>{
        document.title=`you clicked ${count} times`;
    });

    //for api data(after the render)
    useEffect( ()=>{
        fetch('https://dummyjson.com/users')
        .then( (response)=>response.json())
        .then( (data) => setData(data));
    }, [])

    return(
        <div>
            <p>{data? `fetched data: ${JSON.stringify(data)}`: 'fetching data...'}</p>
            <p>you have cliked {count} times</p>
            <button onClick={ ()=> setCount( count + 2)}>click here</button>
        </div>
    );
}

const container= document.getElementById('root');
const root= ReactDOM.createRoot(container);
root.render(<App/>);