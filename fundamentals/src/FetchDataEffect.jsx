import React from "react";
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";

function App(){
    const [users, setUsers]= useState([]);

    //fetch effect
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
          .then( (response)=> response.json())
            .then( (data)=> setUsers(data));
        
    }, []);

    return(
        <ul>
            {users.map( (user)=> {
                return <li key={user.id}>{user.name}</li>
            })}
        </ul>
    )
}

const container= document.getElementById('root');
const root= ReactDOM.createRoot(container);
root.render(<App/>)