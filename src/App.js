import Button from '@mui/material/Button';
import Navbar from './Components/AppBar'
import SideBar from './Components/SideBar'
import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom';
import Request from './Components/Request'

function App() {
  return (
    <div className="App">
      <SideBar />
    </div>
  );
}

export default App;
