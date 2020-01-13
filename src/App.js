import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let [pokemonList, setPokemonList] = useState([])
  const onClickHandler = event => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(response => {
        return response.json();
    }).then(response => {
        console.log(response);
        pokemonList = response.results;
        console.log(pokemonList);
        setPokemonList([...pokemonList])
    }).catch(err=>{
        console.log(err);
    });
  }
  
  return (
    <div className="App">
      <button className="btn btn-large btn-primary mt-2" onClick={onClickHandler}>Fetch Pokemon!</button>
      <ul className="list-group mt-4">
        {pokemonList.map((pokemon, index) => 
          <div key={index}>
            <li className="list-group-item">{pokemon.name}</li>
          </div>
        )}
      </ul>
      
    </div>
  );
}

export default App;
