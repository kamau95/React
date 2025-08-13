import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';


export default function App(){
    //event handlers
    function handleKeyDown(){
        console.log("some keys have been pressed");
    }

    function handleResize(){
        console.log(`the window has been resized by ${window.innerWidth}`);
    }

    //effect in the window
    useEffect( ()=>{
        window.addEventListener('keydown', handleKeyDown);

        return()=>{
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    //window resize effect
    useEffect( ()=>{
        window.addEventListener('resize', handleResize);

        return ()=>{
            window.removeEventListener('resize', handleResize);
        };
    });

    return(
        <div>
            <h1>hello</h1>
            <p>press any key</p>
            <p>resize the screen and check the console</p>
        </div>
    )

}

//control render
const container= document.getElementById('root');
const root= ReactDOM.createRoot(container);
root.render(<App/>)