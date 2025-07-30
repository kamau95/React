import React from 'react';
import ReactDOM from 'react-dom/client';
import { useRef } from 'react';

function SampleForm(){
    const inputRef= useRef();

    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log(inputRef.current);
        console.log(inputRef.current.value);
    }

    const handleClick = () => {
    inputRef.current.focus(); // Focuses the input field
  };
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor='text'>Enter a random text</label>
            <input type='text' ref={inputRef} ></input>
            <button>submit</button>
            <button onClick={handleClick}>Focus Input</button>

        </form>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<SampleForm />);