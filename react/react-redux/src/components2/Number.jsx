import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Number() {
  const number = useSelector((state) => state.number.number);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number : {number}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <button>-</button>
    </div>
  );
}

export default Number;
