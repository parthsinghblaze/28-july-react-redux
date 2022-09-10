import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/action";

function Number() {
  const number = useSelector((state) => state.number);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number : {number} </h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Number;
