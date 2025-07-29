import Reacr from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  function buggyCounter() {
    setCount(count + 1);
    setCount(count + 1);
  }

  function countUpdater() {
    setCount( prev => prev + 2);
    setCount( prev => prev + 4);
  }

  return (
    <div className="container">
      <p>Count: {count}</p>;
      <button onClick={buggyCounter}> buggy double increment</button>

      <button onClick={countUpdater}> correct double increment</button>
    </div>
  );
}

const container= document.getElementById('root');
const root= ReactDOM.createRoot(container);
root.render( <Counter initialCount={34}/>);
