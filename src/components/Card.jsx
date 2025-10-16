import "../styles/Card.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import useFavoritos from "../hooks/useFavoritos";

export default function ProjectCard({ pokesData }) {
  const { isFavorite, toggleFavorite } = useFavoritos(pokesData.id, pokesData);
  const navigate = useNavigate();

  if (!pokesData || !pokesData.sprites) return null;

  const verDetalles = () => {
    navigate(`/pokemons/${pokesData.id}`);
  };

  return (
    <div className="card-wrapper">
      <MDBCard className="custom-card card-hover">
        <MDBCardImage
          src={pokesData.sprites.other.dream_world.front_default}
          position="top"
          alt={pokesData.name}
          style={{ height: "150px", objectFit: "contain" }}
        />
        <MDBCardBody>
          <MDBCardTitle>
            {pokesData.name} #{pokesData.id}
          </MDBCardTitle>

          <MDBBtn className="ver-mas-btn" onClick={verDetalles}>Ver más</MDBBtn>
          <MDBBtn className="favorite-btn"
            onClick={() => toggleFavorite()}
            color={isFavorite ? "danger" : "light"}
          >
            {isFavorite ? "❤️" : "🤍"}
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
