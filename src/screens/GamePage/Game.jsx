import { Box, Button, Typography } from "@mui/material";
import Level from "../../components-Game/Level/Level";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { arrayBiomas } from "../../Data/DataBiomas";
import { useParams } from "react-router-dom";
const Game = () => {
  const navigate = useNavigate();
  const [openStart, setOpenStart] = useState(true);
  const [openPause, setOpenPause] = useState(false);
  const [openVictory, setVictoryModal] = useState(false);
  const [openGameOver, setOpenGameOver] = useState(false);

  const { biomaId, lessonId } = useParams();
  const bioma = arrayBiomas.find((b) => b.id == biomaId);
  const lesson = bioma.lessons.find((l) => l.lessonId == lessonId);

  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    if (items.length === 0) {
      setVictoryModal(true);
    }
  }, [items]);

  useEffect(() => {
    setVictoryModal(false);
  }, []);
  const handleContinue = () => {
    setVictoryModal(false);
    navigate("/Lessons");
  };

  const modalStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 3,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    padding: 4,
    borderRadius: 2,
  };
  const startModalStyle = {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
    bgcolor: "white",
    padding: 3,
    borderRadius: "1rem",
    width: "80vw",
    height: "15vh",
    textAlign: "start",
    alignItems: "center",
    boxShadow: 24,
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
          "url('/assets/backgrounds/Biomas-Background.webp')",
      }}
    >
      <Button
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 10,
          backgroundColor: "#FFE549",
          color: "#000000",
          boxShadow: 3,
        }}
        onClick={() => setOpenPause(true)}
      >
        ||
      </Button>
      <Modal open={openStart} onClose={() => setOpenStart(false)}>
        <Box sx={startModalStyle}>
          <Typography variant="h3">¡Bienvenido!</Typography>
          <Button
            sx={{ backgroundColor: "#FFE549", color: "#000000" }}
            onClick={() => setOpenStart(false)}
          >
            Entendido
          </Button>
        </Box>
      </Modal>

      <Modal open={openPause} onClose={() => setOpenPause(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h4" sx={{ color: "#000000" }}>
            Juego en Pausa
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Button
              sx={{ backgroundColor: "#FFE549", color: "#000000" }}
              onClick={() => setOpenPause(false)}
            >
              Continuar
            </Button>
            <Button
              sx={{ backgroundColor: "#FFE549", color: "#000000" }}
              onClick={() => navigate("/Lessons")}
            >
              Salir
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal open={openVictory} onClose={() => setVictoryModal(false)}>
        <Box sx={modalStyle}>
          <h2>¡Ganaste!</h2>
          <Button
            sx={{ backgroundColor: "#FFE549", color: "#000000" }}
            onClick={handleContinue}
          >
            Continuar
          </Button>
        </Box>
      </Modal>

      <Modal open={openGameOver} onClose={() => {}}>
        <Box sx={modalStyle}>
          <h2>¡Perdiste!</h2>
          <Button
            sx={{ backgroundColor: "#FFE549", color: "#000000" }}
            onClick={() => navigate("/Lessons")}
          >
            Volver
          </Button>
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
            onGameOver={() => setOpenGameOver(true)}
            mapData={lesson.map}
            sprites={bioma.sprites}
          ></Level>
        </Box>
      </Box>
    </Box>
  );
};

export default Game;
