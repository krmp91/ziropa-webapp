import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Grid, Tabs, Tab, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useUserContext } from "../context/userContext";

export default function LoginNav() {
  const [value, setValue] = useState();
  const themeScreen = useTheme();
  console.log(themeScreen);
  const isMatch = useMediaQuery(themeScreen.breakpoints.down("md"));
  console.log(isMatch);

  const { logoutUser } = useUserContext();

  return (
    <>
      <AppBar
        sx={{
          position: "static",
          background: "rgba(95,71,49,0.6183648459383753)",
          height: "4.5em",
          justifyContent: "center",
          maxWidth: "100%",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <Box
                flexGrow={1}
                sx={{
                  maxWidth: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  placeItems: "center",
                }}
                container
              >
                <Button
                  component={Link}
                  to="/addProducts"
                  variant="contained"
                  size="small"
                  sx={{
                    display: "flex",
                    background: "rgba(51,51,51,0.8)",
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  Produkter
                </Button>
                <Button
                  component={Link}
                  to="/addInspiration"
                  variant="contained"
                  size="small"
                  sx={{
                    display: "flex",
                    background: "rgba(51,51,51,0.8)",
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  Inspiration
                </Button>
                <Button
                  component={Link}
                  onClick={logoutUser}
                  to="/login"
                  variant="contained"
                  size="small"
                  sx={{
                    display: "flex",
                    background: "rgba(51,51,51,0.8)",
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                >
                  Log out
                </Button>
              </Box>
            </>
          ) : (
            <Grid
              sx={{
                placeItems: "center",

                justifyContent: "space-between",
              }}
              container
            >
              <Grid item xs={1} sx={{}}></Grid>
              <Grid flexGrow={1} item xs={2} sx={{}}>
                <Tabs
                  variant="myVariant"
                  TabIndicatorProps={{
                    sx: {
                      backgroundColor: "white",
                      height: 2,
                    },
                  }}
                  textColor="inherit"
                  value={value}
                  onChange={(e, val) => setValue(val)}
                  sx={{
                    borderColor: "black",

                    float: "left",
                    boxSizing: "border-box",
                  }}
                >
                  <Tab
                    sx={{
                      "&:hover": { backgroundColor: "grey" },
                    }}
                    label="Produkter"
                    component={Link}
                    to="/addProducts"
                    value="/products"
                  />

                  <Tab
                    sx={{
                      "&:hover": { backgroundColor: "grey" },
                    }}
                    label="Inspiration"
                    component={Link}
                    to="/addInspiration"
                    value="/inspiration"
                  />
                </Tabs>
              </Grid>
              <Grid item xs={0}>
                <Box display="flex">
                  <Button
                    component={Link}
                    to="/login"
                    onClick={logoutUser}
                    variant="contained"
                    size="large"
                    sx={{
                      display: "flex",
                      background: "rgba(51,51,51,0.8)",
                      "&:hover": {
                        backgroundColor: "black",
                      },
                    }}
                  >
                    Log out
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

/* <h1>Dashboard </h1>
      <h2>Name : {user.displayName}</h2>
      <h2>Email : {user.email}</h2>
      <button className="buttonLogin" onClick={logoutUser}>
        Log out
      </button> */
