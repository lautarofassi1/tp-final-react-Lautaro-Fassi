import { useState, useEffect } from "react";

export default function useFavoritos(id, pokemonData = null) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const existe = favoritos.some((fav) => fav.id === parseInt(id));
    setIsFavorite(existe);
  }, [id]);

  const toggleFavorite = () => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (isFavorite) {
      const nuevos = favoritos.filter((fav) => fav.id !== parseInt(id));
      localStorage.setItem("favoritos", JSON.stringify(nuevos));
      setIsFavorite(false);
    } else if (
      pokemonData &&
      pokemonData.id &&
      pokemonData.name &&
      pokemonData.sprites?.other?.dream_world?.front_default
    ) {
      favoritos.push({
        id: pokemonData.id,
        name: pokemonData.name,
        sprite: pokemonData.sprites.other.dream_world.front_default,
      });
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      setIsFavorite(true);
    }
  };

  return { isFavorite, toggleFavorite };
}