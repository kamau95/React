import React from "react";
import ReactDOM from 'react-dom/client';


import { useState } from "react";

function App(){
  const[message, setMessage]= useState('');

  function handleClick(){

    setMessage('its getting late')
  }

  return(
    <div className="container">
      <button onClick={handleClick}>see message</button>
      <p>{message}</p>
    </div>
  )
}

// ✅ Create React root first, then render
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);