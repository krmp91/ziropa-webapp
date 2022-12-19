import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "rgba(95,71,49,0.6183648459383753)",
            width: 300,
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          <ListItemButton
            component={Link}
            to="/home"
            sx={{ ml: 5, my: 1 }}
            onClick={() => setOpen(false)}
          >
            <ListItemText sx={{ color: "white" }}>Hjem</ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/products"
            sx={{ ml: 5, my: 1 }}
            onClick={() => setOpen(false)}
          >
            <ListItemText sx={{ color: "white" }}>Produkter</ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/news"
            sx={{ ml: 5, my: 1 }}
            onClick={() => setOpen(false)}
          >
            <ListItemText sx={{ color: "white" }}>Nyheder</ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/inspiration"
            sx={{ ml: 5, my: 1 }}
            onClick={() => setOpen(false)}
          >
            <ListItemText sx={{ color: "white" }}>Inspiration</ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/about"
            sx={{ ml: 5, my: 1 }}
            onClick={() => setOpen(false)}
          >
            <ListItemText sx={{ color: "white" }}>Om os</ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/contact"
            sx={{ ml: 5, my: 1 }}
            onClick={() => setOpen(false)}
          >
            <ListItemText sx={{ color: "white" }}>Kontakt</ListItemText>
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/login"
            sx={{ ml: 5, my: 1 }}
            onClick={() => setOpen(false)}
          >
            <ListItemText sx={{ color: "white" }}>
              <BiUser />
            </ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton sx={{ color: "white" }} onClick={() => setOpen(!open)}>
        <MenuRoundedIcon sx={{ float: "left", fontSize: 40 }} />
      </IconButton>
    </>
  );
};

export default DrawerMenu;
