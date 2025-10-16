import { useEffect, useState } from "react";
import ProjectCard from "../components/Card";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("favoritos")) || [];

    // Filtrar solo los que tienen datos completos
    const filtrados = guardados.filter(
      (poke) => poke.id && poke.name && poke.sprite
    );

    setFavoritos(filtrados);
  }, []);

  return (
    <div className="page-content">
    <Container className="mt-5">
      <h2 className="text-center mb-4">Tus Pokémon Favoritos</h2>

      {favoritos.length === 0 ? (
        <div className="text-center mt-5">
          <h4>No hay favoritos aún</h4>
          <p>
            Usá el buscador o explorá con el botón Pokédex para descubrir tus
            Pokémon favoritos.
          </p>
          <Button as={Link} to="/pokemons" variant="primary">
            Ir a la Pokédex
          </Button>
        </div>
      ) : (
        <Row className="justify-content-center">
          {favoritos.map((poke) => (
            <Col key={poke.id} xs={12} sm={6} md={4} lg={3}>
              <ProjectCard
                pokesData={{
                  id: poke.id,
                  name: poke.name,
                  sprites: {
                    other: {
                      dream_world: {
                        front_default: poke.sprite,
                      },
                    },
                  },
                }}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
    </div>
  );
}
