import React, { useEffect, useState } from 'react';

const RickandMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [input, setInput] = useState("");
  const [character, setCharacter] = useState(null);

  const fetchCharacters = (name) => {
    const url = name ? `https://rickandmortyapi.com/api/character/?name=${name}`: `https://rickandmortyapi.com/api/character`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Status error " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        if (name) {
          setCharacter(data.results[0]);
          setCharacters([]);
        } else {
          setCharacters(data.results);
          setCharacter(null);
        }
      })
      .catch((error) => {
        console.error("Error en la promesa", error);
      });
  };

  useEffect(() => {
    fetchCharacters(input.trim());
  }, [input]);

  return (
    <div>
      <h1>Rick and Morty app:</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu personaje aquí"
        />
      </div>

      {character && (
        <div>
          <h2>Name: {character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      )}

      {characters.length > 0 && (
        <div>
          {characters.map((ListItem) => (
            <div key={ListItem.id}>
              <h2>Name: {ListItem.name}</h2>
              <h2>Status: {ListItem.status}</h2>
              <img src={ListItem.image} alt={ListItem.name} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RickandMorty;
