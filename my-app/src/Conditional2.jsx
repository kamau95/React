import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <>
      <A />
    </>
  );
}

function A() {
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
    setShowB(true);
    setShowC(true);
  };
  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      {showB && <B text={text} />}
      {showC && <C text={text} />}
    </div>
  );
}

function B(props) {
  const {text}= props;
  return (
    <div>
      <p>{text.toLowerCase()}</p>
    </div>
  );
}

function C(props) {
  const {text} = props;
  return (
    <div>
      <p>{text.toUpperCase()}</p>
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
