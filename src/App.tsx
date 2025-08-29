import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>Contador</h1>
      <p>Valor atual: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(0)}>Resetar</button>
    </div>
  );
}