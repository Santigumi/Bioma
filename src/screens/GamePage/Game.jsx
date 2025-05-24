import { Box, Button } from "@mui/material";
import Level from "../../components-Game/Level/Level";
import Modal from "@mui/material/Modal";
import { useState } from "react";
const Game = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        backgroundImage:
          "url('../src/assets/backgrounds/Biomas-Background.png')",
      }}
    >
      <Box>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Button>Resume</Button>
            <Button>Restart</Button>
            <Button>Quit</Button>
          </Box>
        </Modal>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "Column",
          justifyContent: "space-between",
          height: "95vh",
          width: "85vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Level></Level>
        </Box>
      </Box>
    </Box>
  );
};

export default Game;
