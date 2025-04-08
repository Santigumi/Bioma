import { useState } from 'react'
import LandingPage from './screens/LandingPage';
import RegisterPage from './screens/RegisterPage';
import LoginPage from './screens/LoginPage';
import './App.css'
import ButtonMenu from './components-UI/ButtonMenu/ButtonMenu'
function App() {
  return (
    <>
      <Lessons></Lessons>
      <LoginPage></LoginPage> 
    </>
  );
}

export default App;
