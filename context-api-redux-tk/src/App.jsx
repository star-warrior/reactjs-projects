import { useState } from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <UserContextProvider>
        {" "}
        <h1 className="text-red-400 text-2xl">Hello World</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
