import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../redux/action";

function Profile() {
  const userName = useSelector((state) => state.userName);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>User Name : {userName} </h1>
      <button onClick={() => dispatch(changeName())}>Change Name</button>
    </div>
  );
}

export default Profile;
