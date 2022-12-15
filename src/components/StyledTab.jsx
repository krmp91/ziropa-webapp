import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);
export default function CustomizedTabs() {
  const [value, setValue] = useState();

  return (
    <StyledTabs
      TabIndicatorProps={{
        sx: {
          backgroundColor: "#5f4731",
          height: 3,
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
      <StyledTab label="Hjem" component={Link} to="/" value="/" />
      <StyledTab
        label="Produkter"
        component={Link}
        to="/products"
        value="/products"
      />
      <StyledTab label="Nyheder" component={Link} to="/news" value="/news" />

      <StyledTab
        label="Inspiration"
        component={Link}
        to="/inspiration"
        value="/inspiration"
      />

      <StyledTab label="Om os" component={Link} to="/about" value="/about" />
      <StyledTab
        label="Kontakt"
        component={Link}
        to="/Contact"
        value="/Contact"
      />
    </StyledTabs>
  );
}
