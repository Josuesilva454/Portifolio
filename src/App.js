import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Home from './pages/Home';
import NavBar from './pages/NavBar';

function App() {
  return (
    <div className="App">
    
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
