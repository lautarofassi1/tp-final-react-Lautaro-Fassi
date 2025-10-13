import "./Card.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ pokesData }) {
  const navigate = useNavigate();

  if (!pokesData || !pokesData.sprites) return null;

  const verDetalles = () => {
    navigate(`/pokemons/${pokesData.id}`);
  };

  return (
    <div className="w-50 mx-auto">
      <MDBCard className="card-hover">
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
          <MDBCardText>
            Este es un Pokémon llamado {pokesData.name}.
          </MDBCardText>
          <MDBBtn onClick={verDetalles}>Ver más</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}