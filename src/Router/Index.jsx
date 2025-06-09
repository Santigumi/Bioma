import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../screens/LandingPage/LandingPage";
import HomePage from "../screens/HomePage/Home";
import Biomas from "../screens/BiomasPage/Biomas";
import Journal from "../screens/JournalPage/Journal";
import ProfilePage from "../screens/ProfilePage/ProfilePage";
import RegisterPage from "../screens/RegisterPage/RegisterPage";
import LoginPage from "../screens/LoginPage/LoginPage";
import Lessons from "../screens/LessonsPage/Lessons";
import Game from "../screens/GamePage/Game";
import Trophy from "../screens/TrophyPage/Trophy";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../services/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { clearUser, setUser } from "../redux/auth/AuthSlice";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.uid));
      } else {
        dispatch(clearUser());
      }
    });

    //Desmontar al terminarse de ejecutar
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {/*Rutas normales*/}
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Login" element={<LoginPage />}></Route>
        <Route path="/Register" element={<RegisterPage />}></Route>
        {/*Rutas protegidas*/}
        <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Biomas"
          element={
            <ProtectedRoute>
              <Biomas />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Journal"
          element={
            <ProtectedRoute>
              <Journal />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Lessons"
          element={
            <ProtectedRoute>
              <Lessons />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Game"
          element={
            <ProtectedRoute>
              <Game />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Trophy"
          element={
            <ProtectedRoute>
              <Trophy />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
