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

export default function ProjectCard({ pokesData, favorite, noFavorite }) {
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
          
          <MDBBtn onClick={verDetalles}>Ver más</MDBBtn>
          <MDBBtn
              color={favorite ? "danger" : "light"}
              onClick={() => noFavorite(pokesData)}
            >
              {favorite ? "❤️" : "🤍"}
            </MDBBtn>

          
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}