import './styles/App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Work from './pages/Work.js';
import About from './pages/About.js';
import Project from './pages/Project.js';
import Sidebar from './components/Sidebar.js';



function App() {
  return (
    <div className="page-container">
      <Router>
          <Sidebar  />
          <Routes>
            <Route path='/' element={< Work />} />
            <Route path='/about' element={< About />} />
            <Route path='/project/:id' element={< Project />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
 