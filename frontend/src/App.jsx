import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar.jsx';
import Home from './pages/Home.jsx'; 
import Fun from './pages/Fun.jsx'; 
import AboutMe from './pages/AboutMe.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
        <Router>
            <NavigationBar />
            <div className="body-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/fun/*" element={<Fun />} />
                    <Route path="/aboutme/*" element={<AboutMe />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
