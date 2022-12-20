import { Button } from "@mui/material";
import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

//Kasper
const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="container">
      {!index ? <SignIn /> : <SignUp />}
      <p onClick={toggleIndex}>
        {!index ? (
          <Button sx={{ color: "var(--addBtnBGColor)" }}> Ny bruger?</Button>
        ) : (
          <Button sx={{ color: "var(--addBtnBGColor)" }}>
            Allerede oprettet?
          </Button>
        )}
      </p>
    </div>
  );
};

export default Auth;
