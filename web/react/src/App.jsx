import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar.jsx';
import Home from './components/home/HomeApp.jsx'; 
import Tasks from './components/tasks/TasksApp.jsx'; 
import Games from './components/games/GamesApp.jsx';
import Login from './components/Login.jsx';

function App() {
  return (
    <Router>
        <NavigationBar />
        <Login />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/games" element={<Games />} />
        </Routes>
    </Router>
    )
}

export default App;
