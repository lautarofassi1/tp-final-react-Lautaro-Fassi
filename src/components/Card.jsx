import "./Card.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function ProjectCard({ pokesData }) {
  if (!pokesData || !pokesData.sprites) return null; // Evita el error
  //   const playSound = () => {
  //     const audio = new Audio('/sounds/hover.mp3');
  //     audio.play();
  //   };

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
          <MDBBtn href="#">Ver más</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
