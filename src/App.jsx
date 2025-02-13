import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import ServicesPage from './services/ServicesPage';
import StarshipCard from './components/StarshipCard';






export default function App() {
  return (
    <div>
      <Routes>
        <Route path = '/' element={<ServicesPage />}  />
        <Route path="/profile" element={<StarshipCard />} />
      </Routes>
      
    </div>
  );
}







