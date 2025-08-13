import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1>welcome back</h1>
          <button onClick={handleLogout}>logout</button>
        </div>
      ) : (
        <div>
          <h1>please login</h1>
          <button onClick={handleLogin}>login</button>
        </div>
      )}
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
