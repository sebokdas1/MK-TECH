import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
      </Routes>
    </div>
  );
}

export default App;
