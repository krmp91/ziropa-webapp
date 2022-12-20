import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../components/assets/logo.png";
import { Grid, Tabs, Tab, useTheme, useMediaQuery } from "@mui/material";
import { BiUser } from "react-icons/bi";
import DrawerMenu from "./DrawerMenu";
import { Link } from "react-router-dom";
import "./Nav.css";

//Kasper

export default function Nav() {
  const [value, setValue] = useState();
  const themeScreen = useTheme();
  console.log(themeScreen);
  const isMatch = useMediaQuery(themeScreen.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <>
      <AppBar
        sx={{
          position: "sticky",
          background: "rgba(95,71,49,0.6183648459383753)",
          height: "6.5em",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          {isMatch ? (
            <>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  placeItems: "center",
                }}
                container
              >
                <DrawerMenu />

                <Typography
                  component="a"
                  href="/"
                  sx={{
                    height: 64,
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <img src={logo} alt="ziropa logo"></img>
                </Typography>

                <Button
                  sx={{
                    background: "rgba(51,51,51,0.8)",
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                  variant="contained"
                  size="large"
                  component={Link}
                  to="/login"
                >
                  <BiUser />
                </Button>
              </Box>
            </>
          ) : (
            <Grid sx={{ placeItems: "center" }} container>
              <Grid item xs={1}>
                <Typography
                  component="a"
                  href="/"
                  sx={{
                    height: 96,
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <img src={logo} alt="ziropa logo"></img>
                </Typography>
              </Grid>
              <Grid item xs={9} sx={{}}>
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
                    float: "right",
                    boxSizing: "border-box",
                  }}
                >
                  <Tab label="Hjem" component={Link} to="/" value="/" />
                  <Tab
                    label="Produkter"
                    component={Link}
                    to="/products"
                    value="/products"
                  />
                  <Tab
                    label="Nyheder"
                    component={Link}
                    to="/news"
                    value="/news"
                  />

                  <Tab
                    label="Inspiration"
                    component={Link}
                    to="/inspiration"
                    value="/inspiration"
                  />

                  <Tab
                    label="Om os"
                    component={Link}
                    to="/about"
                    value="/about"
                  />
                  <Tab
                    label="Kontakt"
                    component={Link}
                    to="/contact"
                    value="/contact"
                  />
                </Tabs>
              </Grid>
              <Grid item xs={1} />
              <Grid item xs={1}>
                <Box display="flex" sx={{ float: "right" }}>
                  <Button
                    component={Link}
                    to="/login"
                    variant="contained"
                    size="large"
                    sx={{
                      background: "rgba(51,51,51,0.8)",
                      "&:hover": {
                        backgroundColor: "black",
                      },
                    }}
                  >
                    <BiUser />
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

/* ---------- https://mui.com/system/properties/-------------- */
