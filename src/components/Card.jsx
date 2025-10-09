import "./Card.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function ProjectCard() {
  //   const playSound = () => {
  //     const audio = new Audio('/sounds/hover.mp3');
  //     audio.play();
  //   };

  return (
    <div className="w-50 mx-auto">
      <MDBCard className="card-hover">
        <MDBCardImage
          src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
          position="top"
          alt="..."
        />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </MDBCardText>
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
