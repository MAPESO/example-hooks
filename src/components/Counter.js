import React, { useState } from "react";
import Details from "./Details";

import "../styles/Button.css"

export default function Counter() {
  const [count, setCount] = useState(0);
  const delatePoint = () => count > 0 ? setCount(count - 1) : 0
  return (
    <div>
      <Details />
      <p>{count}</p>
      <button className="Button" onClick={() => setCount(count + 1)}>
        To add a point
      </button>
      <button className="Button" onClick={delatePoint}>
        Delete a point
      </button>
    </div>
  );
}
