import React from "react";
import ReactDOM from 'react-dom/client';
import {useState} from 'react';

function App(){

    const [items, setItems]= useState([]);
    const [input, setInput]= useState("");

    function handleAdd(){
        if(input.trim() === "") return;

        const newItem= {
            id: Date.now(),
            text: input,
            isEditing: false,
            editValue: ""
        }

        setItems( [...items, newItem]);
        setInput("");
    }


    return(
        <div>
            <form>
                <input type='text' value={input} placeholder="add item" onChange={ (e) => setInput(e.target.value)}/>
                <button onClick={handleAdd} >Add</button>
            </form>

            <ul>
                {
                    items.map( item => (
                        <li key={item.id}>
                            {if(item.isEditing){
                                <button></button>
                            }}
                        </li>
                    ))
                }
                
            </ul>
        </div>
        
    )


}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)