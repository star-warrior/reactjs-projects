import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="logo font-bold">React Counter App</h1>
      </div>
      <div className="text-4xl font-bold">{count}</div>
      <div className="card">
        <button className="m-2" onClick={() => setCount((count) => count + 1)}>
          Increment Count {count}
        </button>
        <button className="m-2" onClick={() => setCount((count) => count - 1)}>
          Decrement Count {count}
        </button>
      </div>
    </>
  );
}

export default App;
