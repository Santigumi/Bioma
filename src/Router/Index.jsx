import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../screens/LandingPage";
import Biomas from "../screens/Biomas"
import Journal from "../screens/Journal"
import ProfilePage from "../screens/ProfilePage";
import RegisterPage from "../screens/RegisterPage";
import LoginPage from "../screens/LoginPage";

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
      </Routes>
    </BrowserRouter>
  );
};

export default Router