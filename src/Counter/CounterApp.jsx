import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from "../../Store/Slices/CounterSlice";

const Random = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Random;
