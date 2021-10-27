import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../Redux/counter";

function Home() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>The count is: {value}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}
export default Home;
