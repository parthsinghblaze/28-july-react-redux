import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE } from "../redux/type";

function HideShow() {
  const isShowing = useSelector((state) => state.isShowing);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>I am Hide/Show</h1>
      <button onClick={() => dispatch({ type: TOGGLE })}>
        Hide/Show the para
      </button>
      {isShowing ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque
          reiciendis odio inventore magnam, exercitationem in! Velit sed ipsam
          quibusdam repellendus, exercitationem quidem quia laboriosam dolor
          deserunt dignissimos illum voluptatem! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Et id adipisci quibusdam, nisi quas
          ipsum rem? Iusto in qui sed quo dicta voluptatibus, architecto quam
          repellendus quidem enim excepturi quibusdam.
        </p>
      ) : null}
    </div>
  );
}

export default HideShow;
