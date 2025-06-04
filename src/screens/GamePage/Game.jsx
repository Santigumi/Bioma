import { Box, Button } from "@mui/material";
import Level from "../../components-Game/Level/Level";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Game = () => {
  const navigate = useNavigate();
  const [openStart, setOpenStart] = useState(true);
  const [openPause, setOpenPause] = useState(false);
  const [openVictory, setVictoryModal] = useState(false);
  const items = useSelector((state) => state.items.items);
  useEffect(()=>{
    if(items.length === 0){
      setVictoryModal(true)
    }
  },[items]);
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    padding: 4,
    borderRadius: 2,
    textAlign: "center",
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
        backgroundImage:
          "url('../src/assets/backgrounds/Biomas-Background.png')",
      }}
    >
      <Button
        sx={{ position: "absolute", top: 10, right: 10, zIndex: 10 }}
        onClick={() => setOpenPause(true)}
      >
        ||
      </Button>
      <Modal open={openStart} onClose={() => setOpenStart(false)}>
        <Box sx={modalStyle}>
          <h2>¡Bienvenido!</h2>
          <Button onClick={() => setOpenStart(false)}>Iniciar</Button>
        </Box>
      </Modal>

      <Modal open={openPause} onClose={() => setOpenPause(false)}>
        <Box sx={modalStyle}>
          <h2>Juego en Pausa</h2>
          <Button onClick={() => setOpenPause(false)}>Continuar</Button>
          <Button onClick={() => window.location.reload()}>Reiniciar</Button>
        </Box>
      </Modal>

      <Modal open={openVictory} onClose={() => {}}>
        <Box sx={modalStyle}>
          <h2>¡Ganaste!</h2>
          <Button onClick={() => navigate("/Lessons")}>Volver a jugar</Button>
        </Box>
      </Modal>
      <Box
        sx={{
          display: "flex",
          flexDirection: "Column",
          justifyContent: "space-between",
          width: "85vw",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Level
            onVictory={() => setVictoryModal(true)}
            isPaused={openStart || openPause || openVictory}
          ></Level>
        </Box>
      </Box>
    </Box>
  );
};

export default Game;
