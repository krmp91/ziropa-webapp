import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import logo from "./assets/logo.png";
import { BiUser } from 'react-icons/bi'



export default function Nav() {
  return (
    <header>
        <img className="logo" src={logo} alt="" />
      


    <nav>
   
  
  
{/* <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', fontFamily: 'Poppins, sansserif',fontSize: '20px', backgroundColor: 'grey', padding: 2,}}> */}

      <NavLink to="/" end>HJEM</NavLink>
      <NavLink to="/products">PRODUKTER</NavLink> 
      <NavLink to="/news">NYHEDER</NavLink>
      <NavLink to="/recipe">INSPIRATIONS</NavLink>
      <NavLink to="/about">OM OS</NavLink>
      <NavLink className="login" to="/login"> <BiUser/> </NavLink>

 {/* </Box> */}
 
 </nav>
 </header>
  );
}


/* ---------- https://mui.com/system/properties/-------------- */