import { ChatEngine } from "react-chat-engine";
import "./App.css";

import React from "react";
import LoginForm from "./loginForm";

function App() {
  if (!localStorage.getItem("userName")) return <LoginForm />;
  const logout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
    window.location.reload();
  };
  return (
    <>
      <button onClick={logout}>Logout</button>
      <ChatEngine
        height="100vh"
        userName={localStorage.getItem("userName")}
        userSecret={localStorage.getItem("password")}
        projectID="0beb72cb-a5d6-4dba-955d-13c6556c7ef4"
      />
    </>
  );
}

export default App;
