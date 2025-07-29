import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

function App(){
    const [loading, setLoading]= useState(false);
    const [data, setData]= useState([]);

    function loadData(){
        setLoading(true);
        setTimeout( ()=>{
            setLoading(false);
            setData([2, 3, 4, 5]);
        }, 3000);
    }

    return(
        <>
        {loading && <p>loading...</p>}
        <pre>{JSON.stringify(data, null, '')}</pre>
        <button onClick={loadData}>load data</button>

        </>
    );
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);