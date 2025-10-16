import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import "../styles/PokemonDetail.css";
import useFavoritos from "../hooks/useFavoritos.js";


export default function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);
 const { isFavorite, toggleFavorite } = useFavoritos(id, pokemon);


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));

        
  }, [id]);




  if (!pokemon) {
    return <p className="text-center mt-5">Cargando Pokémon...</p>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 px-4">
      <div className="pokemon-detail-card pokemon-card-container">
        {/* Imagen + nombre */}
        <div className="pokemon-image-section">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            className="pokemon-image"
          />
          <h3 className="text-capitalize mt-3 text-center">
            {pokemon.name} <span className="text-muted">#{pokemon.id}</span>
          </h3>
        </div>

        {/* Info técnica */}
        <div className="pokemon-info-section">
          <div className="mb-3">
            <h5>Información Básica</h5>
            <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
            <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
            <p><strong>Experiencia Base:</strong> {pokemon.base_experience}</p>
          </div>

          <div className="mb-3">
            <h5>Tipos</h5>
            {pokemon.types.map((tipo) => (
              <span key={tipo.type.name} className="badge bg-success me-2">
                {tipo.type.name}
              </span>
            ))}
          </div>

          <div className="mb-3">
            <h5>Habilidades</h5>
            {pokemon.abilities.map((hab) => (
              <span key={hab.ability.name} className="badge bg-warning text-dark me-2">
                {hab.ability.name}
              </span>
            ))}
          </div>

          <div className="mb-3">
            <h5>Estadísticas</h5>
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="mb-2">
                <label><strong>{stat.stat.name}</strong></label>
                <ProgressBar
                  now={stat.base_stat}
                  label={`${stat.base_stat}`}
                  variant={getColor(stat.stat.name)}
                  max={150}
                />
              </div>
            ))}
          </div>

          <div className="text-end mt-4 d-flex justify-content-between">
            <button className="btn btn-outline-danger" onClick={toggleFavorite}>
              {isFavorite ? "❤️ Quitar de favoritos" : "🤍 Agregar a favoritos"}
            </button>

            <button className="btn btn-secondary" onClick={() => navigate(-1)}>
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function getColor(statName) {
  switch (statName) {
    case "hp": return "success";
    case "attack": return "danger";
    case "defense": return "primary";
    case "speed": return "warning";
    case "special-attack": return "info";
    case "special-defense": return "secondary";
    default: return "dark";
  }
}