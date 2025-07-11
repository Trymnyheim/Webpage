import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar.jsx';
import Home from './pages/Home.jsx'; 
import AboutMe from './pages/AboutMe.jsx';

function App() {
  return (
    <Router>
        <NavigationBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
    </Router>
    )
}

export default App;
