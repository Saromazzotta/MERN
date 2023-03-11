import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const base_url = "https://pokeapi.co/api/v2/";
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(base_url + "pokemon?limit=807")
      .then(response => response.json())
      .then(json => setPokemons(json.results))
      .catch(error => console.log(error));
  }, []);
  
  return (
    <div className="App">
      {
        pokemons.map(pokemon => (
          <div key={pokemon.id}>
            <ul style={{display: 'flex', justifyContent: 'center'}}>
              <li>{pokemon.name}</li>
            </ul>
          </div>
        ))
      }
    </div>
  );
}

export default App;
