
import './App.css';
import HomePage from './pages/turners-homepage/HomePage';
import Insurance from './pages/turners-insurance/Insurance';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/insurance" element={<Insurance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
