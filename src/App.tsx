import { useState } from "react";
import "./App.scss";
import reactSvg from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="title">
        <img src={reactSvg} alt="React" />
        <h1>App</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
