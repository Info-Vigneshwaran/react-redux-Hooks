import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions/counter';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  return (
    <div>
      <h1>Count: {count}</h1>

      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
