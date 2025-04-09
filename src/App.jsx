import { useState } from 'react'
import LandingPage from './screens/LandingPage';
import RegisterPage from './screens/RegisterPage';
import LoginPage from './screens/LoginPage';
import Game from './screens/Game'
import ProfilePage from './screens/ProfilePage';
import './App.css'
import Router from './Router/Index';


function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
