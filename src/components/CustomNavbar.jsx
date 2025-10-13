import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import '../styles/CustomNavbar.css';


function CustomNavbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    const term = searchTerm.trim().toLowerCase();

    if (!term) return;

    // Si es número, es su ID
    if (!isNaN(term)) {
      navigate(`/pokemons/${term}`);
    } else {
      // Si es texto, es el nombre
      navigate(`/pokemons/${term}`);
    }

    setSearchTerm("");
  };

  return (
    <Navbar expand="lg" className="custom-navbar  fixed-top center shadow">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          PokeAppi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/pokemons">
              Pokedex
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>

          <Form className="d-flex" onSubmit={search}>
            <Form.Control
              type="search"
              placeholder="Buscar por nombre o ID  "
              className="me-2"
              style={{ minWidth: "220px" }}
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button variant="outline-success" type="submit">
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
