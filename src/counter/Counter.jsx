import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <p>{count}</p>
      <br />
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

export default Counter;
