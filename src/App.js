import './styles/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Work from './pages/Work.js';
import About from './pages/About.js';
import Project from './pages/Project.js';
import Afterlife from './pages/projects/Afterlife.js';
import Speculative from './pages/projects/Speculative.js';
import Sidebar from './components/Sidebar.js';



function App() {
  return (
    <div className="page-container">
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={< Work />}></Route>
          <Route path='/about' element={< About />}></Route>
          <Route path='/project' element={< Project />}>
            <Route path='/project/afterlife' element={<Afterlife />}></Route>
            <Route path='/project/speculative' element={<Speculative />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 