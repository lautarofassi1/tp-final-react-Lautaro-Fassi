import CustomNavbar from "../components/CustomNavbar";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/HomePage.css";

export default function HomePage() {
  return (
    <Container className="home-page mt-5">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="display-4">Bienvenido a PokéExplorer</h1>
          <p className="lead">
            Una app interactiva para explorar Pokémon, buscar tus favoritos y
            descubrir detalles únicos.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>¿Qué es PokéExplorer?</Card.Title>
              <Card.Text>
                PokéExplorer es una aplicación web desarrollada con React y
                React Bootstrap que permite explorar el mundo Pokémon de forma
                dinámica. Utiliza la PokéAPI para mostrar información
                actualizada, con funcionalidades como búsqueda por nombre,
                paginación de resultados, modales con detalles, y una interfaz
                moderna y responsiva.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Propósito del proyecto</Card.Title>
              <Card.Text>
                Este proyecto fue creado como parte de mi portfolio para
                demostrar habilidades en desarrollo front-end, integración de
                APIs, diseño responsivo, y organización profesional del código.
                Busco ofrecer una experiencia atractiva y funcional que refleje
                buenas prácticas y atención al detalle.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="Pikachu"
            className="home-image"
          />
          <p className="mt-3">
            ¡Explorá, buscá y descubrí tu equipo Pokémon ideal!
          </p>
        </Col>
      </Row>
      <Row className="tech-section text-center mt-5">
        <Col>
          <h2>Tecnologías utilizadas</h2>
          <div className="tech-logos d-flex justify-content-center flex-wrap mt-3">
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React"
                className="tech-icon"
              />
            </a>

            <a
              href="https://vitejs.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://vitejs.dev/logo.svg"
                alt="Vite"
                className="tech-icon"
              />
            </a>

            <a
              href="https://getbootstrap.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                alt="Bootstrap"
                className="tech-icon"
              />
            </a>

            <a
              href="https://pokeapi.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="tp-final-react-Lautaro-Fassi\public\assets\pokeapi-logo.png"
                alt="PokéAPI"
                className="tech-icon"
              />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                className="tech-icon"
              />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
