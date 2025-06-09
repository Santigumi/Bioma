import IconNav from "../IconNav/IconNav";
import biomaIcon from "/assets/icons/hoja.svg";
import homeIcon from "/assets/icons/home.svg";
import journalIcon from "/assets/icons/journal.svg";
import profileIcon from "/assets/icons/profile.svg";
import { Box } from "@mui/material";
const Navbar = ({ backgroundColor, hoverColor }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: {
          xs: "end",
          sm: "end",
          md: "center",
          lg: "center",
          xl: "center",
        },
        justifyContent: "center",
        width: {
          xs: "100vw",
          sm: "100vw",
          md: "12vw",
          lg: "12vw",
          xl: "12vw",
        },
        height: {
          xs: "5rem",
          sm: "5rem",
          md: "100vh",
          lg: "100vh",
          xl: "100vh",
        },
        position: {
          xs: "fixed",
          sm: "fixed",
          md: "static",
          lg: "static",
          xl: "static",
        },
        zIndex: {
          xs: 1000,
          sm: 1000,
          md: "auto",
        },
        bottom: {
          xs: 0,
          sm: 0,
        },
        left: {
          xs: 0,
          sm: 0,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            sm: "row",
            md: "column",
            lg: "column",
            xl: "column",
          },
          justifyContent: {
            xs: "space-around",
            ms: "space-around",
            md: "center",
            lg: "center",
            xl: "center",
          },
          alignItems: "center",
          gap: 2,
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          width: {
            xs: "100vw",
            sm: "100vw",
            md: "7rem",
            lg: "7rem",
            xl: "7rem",
          },
          height: {
            xs: "6rem",
            sm: "8rem",
            md: "25rem",
            lg: "25rem",
            xl: "25rem",
          },
          borderRadius: "15px",
          backgroundColor: backgroundColor || `rgba(69, 196, 132, 1)`,
        }}
      >
        <IconNav
          icon={homeIcon}
          textIcon="Home"
          alt="Home icon"
          route="/Home"
        ></IconNav>
        <IconNav
          icon={biomaIcon}
          textIcon="Biomas"
          alt="Biomas icon"
          route="/Biomas"
        ></IconNav>
        <IconNav
          icon={journalIcon}
          textIcon="Journal"
          alt="Journal icon"
          route="/Journal"
        ></IconNav>
        <IconNav
          icon={profileIcon}
          textIcon="Profile"
          alt="Profile icon"
          route="/Profile"
        ></IconNav>
      </Box>
    </Box>
  );
};

export default Navbar;
