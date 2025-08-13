import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.error("sth is wrong", err));
  }, []);

  //render
  return (
    <>
      <ul>
        {characters.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </>
  );
}

const container=document.getElementById('root');
const root= ReactDOM.createRoot(container);
root.render(<App/>)
