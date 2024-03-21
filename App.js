import Home from './head/home';
import Galeri from './head/galeri';
import Portofolio from './head/portofolio';
import prestasi from './head/prestasi';
import Biodata from './head/biodata';
import { Link } from 'react-router-dom';



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path='/home' element={<home />} />
          <Route path='/biodata' element={<biodata />} />
          <Route path='/galeri' element={<galeri />} />
          <Route path='/prestasi' element={<prestasi />} />
          <Route path='/portofolio' element={<portofolio />} />
          
        </Routes>
      </div>

    </Router>

  );
}

export default App;
