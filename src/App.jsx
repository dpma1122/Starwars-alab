import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import ServicesPage from './services/ServicesPage';
import StarshipCard from './components/StarshipCard';
import Nav from './components/Nav'






export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path = '/' element={<ServicesPage />}  />
        <Route path="/profile" element={<StarshipCard />} />
        <Route path="/profile/:starships" element={<StarshipCard />} />
      </Routes>
      
    </div>
  );
}







