import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useUserContext } from "../context/userContext";
import LoginNav from "../components/LoginNav";

const UserInspiration = () => {
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
        <Typography variant="h6">Name : {user.displayName}</Typography>
        <Typography variant="h6">Email : {user.email}</Typography>
      </Box>
      <LoginNav />
      <Box>hahaha!!!</Box>
    </Box>
  );
};

export default UserInspiration;
