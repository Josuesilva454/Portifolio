import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import Footer from './components/Footer';
import Documents from './pages/Documents';

function App() {
  return (
    <div className="App">
    
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/documents" element={<Documents />} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
