import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";
import PokemonDetail from "./pages/PokemonDetail";
import Favoritos from "./pages/Favoritos";

function App() {
  return (
    <Routes>
      {/* Redirección desde la ruta base de GitHub Pages */}
      <Route path="/tp-final-react-Lautaro-Fassi" element={<Navigate to="/" />} />

      {/* Rutas principales */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="pokemons" element={<PokemonPage />} />
        <Route path="pokemons/:id" element={<PokemonDetail />} />
        <Route path="favoritos" element={<Favoritos />} />
      </Route>
    </Routes>
  );
}

export default App;