import { useState, useEffect } from "react";
import ProjectCard from "../components/Card";

const BASE = "https://pokeapi.co/api/v2/pokemon";

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(`${BASE}?limit=20&offset=${offset}`)
      .then((res) => res.json())
      .then((data) => {
        const urls = data.results.map((poke) => poke.url);

        Promise.all(
          urls.map((url) => fetch(url).then((res) => res.json()))
        ).then((details) => {
          setPokemons((prev) => [...prev, ...details]);
        });
      });
  }, [offset]);

  const cargarMas = () => {
    setOffset(offset + 20);
  };

  return (
    
    <div className="container text-center">
      <h2 className="text-center my-4">Lista de Pokémon</h2>

      <div className="row justify-content-center">
        {pokemons.map((poke, index) => (
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
            key={index}
          >
            <ProjectCard pokesData={poke} />
          </div>
        ))}
      </div>

      <div className="text-center my-4">
        <button onClick={cargarMas} className="btn btn-primary">
          Cargar 20 más
        </button>
      </div>
    </div>
  );
}
