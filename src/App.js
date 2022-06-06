import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './page/Banner';
import Home from './page/Home';
import Native from './page/Native';
import Pop from './page/Pop';
import Skim from './page/Skim';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Pop />}></Route>
          <Route path='banner' element={<Banner />}></Route>
          <Route path='native' element={<Native />}></Route>
          <Route path='skim' element={<Skim />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
