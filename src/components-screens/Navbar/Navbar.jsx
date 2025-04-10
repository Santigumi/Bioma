import IconNav from "../IconNav/IconNav";
import biomaIcon from "../../assets/icons/hoja.svg";
import homeIcon from "../../assets/icons/home.svg";
import journalIcon from "../../assets/icons/journal.svg";
import profileIcon from "../../assets/icons/profile.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ backgroundColor, hoverColor  }) => {
  return (
    <nav className="navbar">
      <ul
        className="navbar-list"
        style={{ backgroundColor: backgroundColor || `rgba(69, 196, 132, 1)`,
          "--hover-color": hoverColor || "rgba(50, 160, 100, 1)"
         }}
      >
        <Link to="/" className="navbar-item">
          <IconNav icon={homeIcon} textIcon="Home"></IconNav>
        </Link>
        <Link to="/Biomas" className="navbar-item">
          <IconNav icon={biomaIcon} textIcon="Biomas"></IconNav>
        </Link>
        <Link to="/Journal" className="navbar-item">
          <IconNav icon={journalIcon} textIcon="Journal"></IconNav>
        </Link>
        <Link to="/Register" className="navbar-item">
          <IconNav icon={profileIcon} textIcon="Profile"></IconNav>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
