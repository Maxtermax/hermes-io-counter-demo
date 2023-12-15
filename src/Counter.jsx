/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useObserver } from 'hermes-io';
import { CounterContext } from './contexts/counter';
import { CounterObserver } from './observers/counter';
import { INCREMENT, DECREMENT } from './constants';

export function Counter() {
  const [count, setCount] = useState(0);
  const handleCounterNotification = (event) => {
    const { value = {} } = event;
    const { type } = value;
    if (type === INCREMENT) setCount((prevValue) => prevValue + 1);
    if (type === DECREMENT) setCount((prevValue) => prevValue - 1);
  };

  useObserver({
    contexts: [CounterContext],
    observer: CounterObserver,
    listener: handleCounterNotification,
  });

  return <h1>Counter: {count}</h1>;
}
