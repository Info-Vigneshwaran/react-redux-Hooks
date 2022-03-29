import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementCounter,
  decrementCounter,
  setCounter,
} from '../actions/counter';

const Counter = () => {
  const count = useSelector((props) => props.counterReducer.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  const handleSetCounter = () => {
    dispatch(setCounter(15));
  };

  return (
    <div>
      <h1>Count: {count}</h1>

      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleSetCounter}>Set Counter</button>
      </div>
    </div>
  );
};

export default Counter;
