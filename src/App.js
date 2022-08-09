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
import Blossom from './pages/projects/Blossom.js';
import Lunar from './pages/projects/Lunar.js';
import WoodPavillion from './pages/projects/WoodPavillion.js';
import Rexton from './pages/projects/Rexton.js';
import MatLandscapes from './pages/projects/MatLandscapes.js';
import Battery from './pages/projects/Battery.js';
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
              <Route path='/project/blossom' element={<Blossom />}></Route>
              <Route path='/project/lunar' element={<Lunar />}></Route>
              <Route path='/project/woodpavillion' element={<WoodPavillion />}></Route>
              <Route path='/project/rexton' element={<Rexton />}></Route>
              <Route path='/project/matlandscapes' element={<MatLandscapes />}></Route>
              <Route path='/project/battery' element={<Battery />}></Route>
            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
 