/* eslint-disable react/prop-types */
import { useRef } from "react";
import { CounterContext } from './contexts/counter';
import { CounterObserver } from './observers/counter';
import { Counter } from './Counter';
import { INCREMENT, DECREMENT } from './constants';
import "./App.css";
 
function RenderTracker() {
  const count = useRef(0);
  count.current++;
  return <h2>Re render tracker: {count.current}</h2>;
}

function App() {
  const increment = () => {
    CounterObserver.notify({
      context: CounterContext, 
      value: {
        type: INCREMENT,
      },
    });
  };

  const decrement = () => {
    CounterObserver.notify({
      context: CounterContext, 
      value: {
        type: DECREMENT,
      },
    });
  };

  return (
    <div>
      <Counter />
      <RenderTracker />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
