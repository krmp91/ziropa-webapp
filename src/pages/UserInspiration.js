import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useUserContext } from "../context/userContext";
import LoginNav from "../components/LoginNav";
import DisplayRecipe from "../components/DisplayRecipe";
import BoxAddRecipe from "../components/BoxAddRecipe";

//Kasper

const ContainerStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "var(--Gap)",
};

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
      <Box sx={ContainerStyle}>
        {" "}
        <Typography className="test" sx={{ p: 2, fontSize: 40 }}>
          Tilføj eller fjern opskrifter her!
        </Typography>
        <Box
          sx={{
            m: 1,
            display: "flex",
            borderRadius: "26px",
            pb: "calc(var(--addbtnSize) + 10%)",
          }}
        >
          <DisplayRecipe />
        </Box>
        <Box
          sx={{
            m: 1,
            display: "flex",
            borderRadius: "26px",
            pb: "calc(var(--addbtnSize) + 10%)",
          }}
        ></Box>
        <BoxAddRecipe />
      </Box>
    </Box>
  );
};

export default UserInspiration;
