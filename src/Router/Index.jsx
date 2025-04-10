import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../screens/LandingPage";
import Biomas from "../screens/BiomasPage/Biomas";
import Journal from "../screens/Journal";
import ProfilePage from "../screens/ProfilePage";
import RegisterPage from "../screens/RegisterPage";
import LoginPage from "../screens/LoginPage";
import Lessons from "../screens/Lessons"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Biomas" element={<Biomas />}></Route>
        <Route path="/Journal" element={<Journal />}></Route>
        <Route path="/Profile" element={<ProfilePage />}></Route>
        <Route path="/Login" element={<LoginPage />}></Route>
        <Route path="/Register" element={<RegisterPage />}></Route>
        <Route path="/Lessons" element={<Lessons />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
