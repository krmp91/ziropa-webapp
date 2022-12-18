import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useUserContext } from "../context/userContext";
import LoginNav from "./LoginNav";

const LoginPage = () => {
  const { user } = useUserContext();
  return (
    <Box sx={{ minWidth: "100%" }}>
      <Box
        sx={{
          padding: 2,
          backgroundColor: "rgba(95,71,49,0.6183648459383753)",
        }}
      >
        <Typography variant="h5" color="initial">
          Admin Panal
        </Typography>
        <h2>Name : {user.displayName}</h2>
        <h2>Email : {user.email}</h2>
      </Box>
      <LoginNav />
    </Box>
  );
};

export default LoginPage;
