import IconNav from "../IconNav/IconNav";
import biomaIcon from "../../assets/icons/hoja.svg";
import homeIcon from "../../assets/icons/home.svg";
import journalIcon from "../../assets/icons/journal.svg";
import profileIcon from "../../assets/icons/profile.svg";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = ({ backgroundColor, hoverColor }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "12vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 2,
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          width: "7rem",
          height: "25rem",
          borderRadius: "15px",
          backgroundColor: backgroundColor || `rgba(69, 196, 132, 1)`,
        }}
      >
        <Link to="/" className="navbar-item">
          <IconNav icon={homeIcon} textIcon="Home" alt="Home icon"></IconNav>
        </Link>
        <Link to="/Biomas" className="navbar-item">
          <IconNav
            icon={biomaIcon}
            textIcon="Biomas"
            alt="Biomas icon"
          ></IconNav>
        </Link>
        <Link to="/Journal" className="navbar-item">
          <IconNav
            icon={journalIcon}
            textIcon="Journal"
            alt="Journal icon"
          ></IconNav>
        </Link>
        <Link to="/Profile" className="navbaritem">
          <IconNav
            icon={profileIcon}
            textIcon="Profile"
            alt="Profile icon"
          ></IconNav>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
