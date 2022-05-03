import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, selectUser } from "../../redux/userSlice";

const HomeDemo = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogoutClick = () => {
    dispatch(logout());
    navigate("/");
    window.location.reload();
  };
  return (
    <Fragment>
      <article className="home-demo">
        <h1>Welcome home user {user!.username}</h1>
        <button onClick={onLogoutClick}>Logout</button>
      </article>
    </Fragment>
  );
};

export default HomeDemo;
