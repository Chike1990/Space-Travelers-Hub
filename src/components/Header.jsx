import planet from "../assets/planet.png"
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="Header flex-row align-center justify-between">
      <div className="flex-row align-center">
        <img src={planet} alt="logo" className="Header__logo" />
        <h1>Space Travelers' Hub</h1>
      </div>
      <nav className="Header__nav">
        <NavLink to="/"  activeClassName="active" exact className="link-primary mr1">Rockets</NavLink>
        <NavLink to="/missions" activeClassName="active" exact className="link-primary mr1">Missions</NavLink>
        {" | "}
        <NavLink to="/profile" activeClassName="active" exact className="link-primary ml1">Profile</NavLink>
      </nav>
    </header>
   );
}
 
export default Header;