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
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Home" element={<HomePage />}></Route>
        <Route path="/Biomas" element={<Biomas />}></Route>
        <Route path="/Journal" element={<Journal />}></Route>
        <Route path="/Profile" element={<ProfilePage />}></Route>
        <Route path="/Login" element={<LoginPage />}></Route>
        <Route path="/Register" element={<RegisterPage />}></Route>
        <Route path="/Lessons" element={<Lessons />}></Route>
        <Route path="/Game" element={<Game />}></Route>
        <Route path="/Trophy" element={<Trophy />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
