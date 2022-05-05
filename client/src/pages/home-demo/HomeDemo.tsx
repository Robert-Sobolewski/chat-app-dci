import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMessage, selectChat } from "../../redux/chatSlice";
import { logout, selectUser } from "../../redux/userSlice";

const HomeDemo = () => {
  const user = useSelector(selectUser);
  const chat: string[] = useSelector(selectChat);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");
  const onLogoutClick = () => {
    dispatch(logout());
    navigate("/");
    window.location.reload();
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addMessage(message));
    setMessage("");
  };
  return (
    <Fragment>
      <article className="home-demo">
        <h1>Welcome home user {user!.username}</h1>
        <div
          className="messages"
          style={{
            overflow: "scroll",
            height: "300px",
            border: "1px solid black",
          }}
        >
          <ul>
            {chat?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <form onSubmit={(e: any) => onSubmit(e)}>
          <input
            type="text"
            value={message}
            onChange={(e: any) => setMessage(e.target.value)}
            name="msg"
            id="msg"
          />
          <button>Send</button>
        </form>
        <button onClick={onLogoutClick}>Logout</button>
      </article>
    </Fragment>
  );
};

export default HomeDemo;
