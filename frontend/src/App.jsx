import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar.jsx';
import Home from './pages/Home.jsx'; 
import Fun from './pages/Fun.jsx'; 
import AboutMe from './pages/AboutMe.jsx';

function App() {
  return (
        <Router>
            <NavigationBar />
            <div className="body-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
