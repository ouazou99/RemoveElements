import { useState } from "react";

export default function Hook() {
  const [count, setCount] = useState(0);
  const kk = 0;
  return (
    <div>
      <h1>{count} </h1>
      <button onClick={() => setCount(count + 3)}> IncrementHere </button>
      <button onClick={() => setCount(count - 1)}> DecrementHere </button>
      <button onClick={() => setCount(count * 0)}> Reset </button>
    </div>
  );
}
