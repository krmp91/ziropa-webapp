import { Button } from "@mui/material";
import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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
          <Button> Ny bruger?</Button>
        ) : (
          <Button>Allerede oprettet?</Button>
        )}
      </p>
    </div>
  );
};

export default Auth;
