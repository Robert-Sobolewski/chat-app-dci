import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import DemoPage from "./pages/demo-page/DemoPage";
import HomeDemo from "./pages/home-demo/HomeDemo";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";
import { selectUser } from "./redux/userSlice";

function App() {
  // const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <HomeDemo /> : <DemoPage />} />
        {/* <Route path="/" element={user ? <MessengerPage /> : <RegisterPage />} />
        <Route
          path="/login"
          element={user ? <MessengerPage /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={user ? <MessengerPage /> : <RegisterPage />}
        /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
