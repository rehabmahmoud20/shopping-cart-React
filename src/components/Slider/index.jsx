import Carousel from "react-bootstrap/Carousel";
import computer from "../../assets/computer.jpg";
import menHeader from "../../assets/menHeader.jpg";
import womenHeader from "../../assets/womenHeader.jpg";
import { Link } from "react-router-dom";

function IndividualIntervalsExample() {
  return (
    <Carousel className="mb-4">
      <Carousel.Item className=" w-100">
        <Link to='/women'>
        <img
          className="d-block img-fluid w-100  "
          src={womenHeader}
          alt="First slide"
        />
        </Link>
      
      </Carousel.Item>
      <Carousel.Item className="w-100 ">
        <Link to='/men'>
        <img
          className="d-block  img-fluid w-100 "
          src={menHeader}
          alt="Second slide"
        />
        </Link>
       
      </Carousel.Item>
      <Carousel.Item className="w-100 ">
      <Link to="/elctronics">
      <img
          className="d-block img-fluid w-100  "
          src={computer}
          alt="Third slide"
        />
      </Link>
       
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;

