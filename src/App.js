import './App.css';
import HomePage from './pages/turners-homepage/HomePage';
import Insurance from './pages/turners-insurance/Insurance';
import Construction from './pages/turners-construction/TurnersConstruction'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Car from './pages/turners-car/TurnersCar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/car" element={<Car />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
