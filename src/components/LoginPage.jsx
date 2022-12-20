import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useUserContext } from "../context/userContext";
import LoginNav from "./LoginNav";

//Kasper

const LoginPage = () => {
  const { user } = useUserContext();
  return (
    <Box sx={{ height: "70vh", minWidth: "100%" }}>
      <Box
        sx={{
          padding: 2,
          backgroundColor: "rgba(95,71,49,0.6183648459383753)",
        }}
      >
        <Typography variant="h5" color="initial">
          Admin Panal
        </Typography>
        <Typography variant="h6">Name : {user.displayName}</Typography>
        <Typography variant="h6">Email : {user.email}</Typography>
      </Box>
      <LoginNav />
    </Box>
  );
};

export default LoginPage;
