import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/" end>
        Hjem
      </NavLink>
      <NavLink to="/products">Produkter</NavLink>
      <NavLink to="/news">Nyheder</NavLink>
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/recipe">Opskrifter</NavLink>
      <NavLink to="/about">Om os</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}
