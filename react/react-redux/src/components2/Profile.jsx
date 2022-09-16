import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const userName = useSelector((state) => state.changeName.userName);

  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState("");

  return (
    <div>
      <h1>My name is : {userName} </h1>
      <input
        type="text"
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "change", payload: formValue })}>
        Change
      </button>
    </div>
  );
}

export default Profile;
