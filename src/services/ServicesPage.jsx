import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ServicesPage() {
  const [spaceship, setSpaceship] = useState(null); 
  const { symbol } = useParams();
}

useEffect(() => {
  async function (() => {
    try {
      const url = 'https://swapi.dev/api';
      const response = await fetch(url);

      const data = await response.json();
      setSpaceship(data);
    } catch (error) {
      console.log(error);
    }
  }
  getSpaceship();
}, []);

return spaceship ? (
  <div>
    <h2>{Loading}
    </h2>
  </div>
)
