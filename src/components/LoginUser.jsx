import React from "react";
import { useUserContext } from "../context/userContext";
import Auth from "./Auth";
import LoginPage from "./LoginPage";
import "./LoginUser.css";

function LoginUser() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="loginUser">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <LoginPage /> : <Auth />} </>}
    </div>
  );
}

export default LoginUser;
