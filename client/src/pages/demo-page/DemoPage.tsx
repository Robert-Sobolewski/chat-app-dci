import axios from "axios";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";

const DemoPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4444/api/auth/login",
          {
            email: email,
            password: password,
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response: any) => {
          console.log(response.data);
          dispatch(login(response.data));
        });
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };
  return (
    <Fragment>
      <article className="demo-page">
        <h1>Example login functionality</h1>
        <form action="" onSubmit={(e: any) => onFormSubmit(e)}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            name="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            name="password"
            id="password"
          />
          <input type="submit" value="Login" />
        </form>
      </article>
    </Fragment>
  );
};

export default DemoPage;
