import * as React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import "../App.css";
import AddRecipe from "./AddRecipe";

//Kasper

const style3 = {
  color: "var(--addBtnColor)",
  width: "var(--addbtnSize)",
  height: "var(--addbtnSize)",
  backgroundColor: "var(--addBtnBGColor)",
  position: "fixed",
  transform: "translate(-50%, -50%)",
  bottom: "8%",
  border: "var(--addBtnBorder)",
  boxShadow: 24,
  p: 4,
  m: 0,
  "&:hover": {
    border: "1px solid #161616d2",
    color: "#161616d2",
    backgroundColor: "rgba(95, 71, 49, 0.874)",
  },
};

const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  height: "95%",
  backgroundColor: "var(--bgColor)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  mt: 0,
  mb: 0,
};

export default function FloatingActionButtons() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ "& > :not(style)": style3 }}>
      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style1}>
          <Typography id="keep-mounted-modal-description">
            <AddRecipe />
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
