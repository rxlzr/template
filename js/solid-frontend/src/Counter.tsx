import { createSignal } from 'solid-js';

const [count, setCount] = createSignal(0);
const increment = () => {
  setCount(count() + 1);
};

export const Counter = () => {
  return (
    <>
      <div>Current count: {count()}</div>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
};
