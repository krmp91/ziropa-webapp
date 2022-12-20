import React from "react";
import { useUserContext } from "../context/userContext";
import Auth from "./Auth";
import LoginPage from "./LoginPage";
import "./LoginUser.css";

//Kasper

function LoginUser() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="loginUser" style={{ height: "70vh" }}>
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <LoginPage /> : <Auth />} </>}
    </div>
  );
}

export default LoginUser;
