import { Box, Button, Typography } from "@mui/material";
import Level from "../../components-Game/Level/Level";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { arrayBiomas } from "../../Data/DataBiomas";
import { completeLesson } from "../../redux/game/statsSlice";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";


const initialStateCompleteLevels = {
  Savannah: {
    lesson1: false,
    lesson2: false,
    lesson3: false,
    lesson4: false,
    count: 0,
  },
  Moorland: {
    lesson1: false,
    lesson2: false,
    lesson3: false,
    lesson4: false,
    count: 0,
  },
  Desert: {
    lesson1: false,
    lesson2: false,
    lesson3: false,
    lesson4: false,
    count: 0,
  },
  Tropical_Forest: {
    lesson1: false,
    lesson2: false,
    lesson3: false,
    lesson4: false,
    count: 0,
  },
  Seagrass: {
    lesson1: false,
    lesson2: false,
    lesson3: false,
    lesson4: false,
    count: 0,
  },
  Pelagic_Ecosystem: {
    lesson1: false,
    lesson2: false,
    lesson3: false,
    lesson4: false,
    count: 0,
  },
  Mangroves: {
    lesson1: false,
    lesson2: false,
    lesson3: false,
    lesson4: false,
    count: 0,
  },
  Reef: {
    lesson1: false,
    lesson2: false,
    lesson3: false,
    lesson4: false,
    count: 0,
  },
};

const Game = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { biomaId, lessonId } = useParams();

  const user = useSelector((state) => state.auth.user);
  const items = useSelector((state) => state.items.items);
  console.log(user)
  const [openStart, setOpenStart] = useState(true);
  const [openPause, setOpenPause] = useState(false);
  const [openVictory, setVictoryModal] = useState(false);
  const [openGameOver, setOpenGameOver] = useState(false);

  const bioma = arrayBiomas.find((b) => b.id == biomaId);
  console.log(bioma.description)
  const lesson = bioma.lessons.find((l) => l.lessonId == lessonId);

  useEffect(() => {
    if (items.length === 0) {
      setVictoryModal(true);
    }
  }, [items]);

  useEffect(() => {
    setVictoryModal(false);
  }, []);

  const handleContinue = async () => {
    if (!user) return;

    const uid = user.uid;
    const biomaKey = bioma.nombre;
        console.log(bioma.nombre)
    const lessonKey = `lesson${lesson.lessonId % 10}`;

    const userDocRef = doc(db, "progress", uid);
    let newProgress = {};

    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      newProgress = docSnap.data();
    } else {
      newProgress = JSON.parse(JSON.stringify(initialStateCompleteLevels));
    }

    if (!newProgress[biomaKey][lessonKey]) {
      newProgress[biomaKey][lessonKey] = true;
      newProgress[biomaKey].count += 1;
    }

    await setDoc(userDocRef, newProgress);
    dispatch(completeLesson({ bioma: biomaKey, lesson: lessonKey }));

    setVictoryModal(false);
    navigate(`/lessons/${biomaId}`);
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
    justifyContent: "space-between",
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
        backgroundImage: `url(${bioma.backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
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
          <Typography variant="body">{bioma.description}</Typography>
          <Button
            sx={{ backgroundColor: "#FFE549", color: "#000000" }}
            onClick={() => setOpenStart(false)}
          >
            Get it
          </Button>
        </Box>
      </Modal>

      <Modal open={openPause} onClose={() => setOpenPause(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h4" sx={{ color: "#000000" }}>
            Pause
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
              Continue
            </Button>
            <Button
              sx={{ backgroundColor: "#FFE549", color: "#000000" }}
              onClick={() => navigate(`/Lessons/${biomaId}`)}
            >
              Quit
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal open={openVictory} onClose={() => setVictoryModal(false)}>
        <Box sx={modalStyle}>
          <h2>¡You win!</h2>
          <Button
            sx={{ backgroundColor: "#FFE549", color: "#000000" }}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </Box>
      </Modal>

      <Modal open={openGameOver} onClose={() => {}}>
        <Box sx={modalStyle}>
          <h2>¡You lose!</h2>
          <Button
            sx={{ backgroundColor: "#FFE549", color: "#000000" }}
            onClick={() => navigate(`/Lessons/${biomaId}`)}
          >
            Come back
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
