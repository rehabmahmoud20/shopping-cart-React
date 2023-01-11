import { Link } from "react-router-dom";
import women from "../../assets/women.jpg";
import jwellary from "../../assets/jwellary.jpg";
import men from "../../assets/mens.jpg";
import electronics from "../../assets/electronics.jpg";
import Slider from "../Slider";
const Shop = () => {
  return (
    <>
      <Slider className="mb-4"/>
      <div className="container">
        <div className="row  gy-5 text-center">
          <div className="col-md-6 ">
            <div className="category-img   bg-light py-4">
            <h2 className=" mb-4 ">Jwellaries</h2>

              <Link
                to="/Jwellary"
                className="text-light text-decoration-none  fs-4"
              >
                <img src={jwellary} alt="jwellary" className="img-fluid w-75  d-block mx-auto" />
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="category-img  bg-light py-4">
            <h2 className=" mb-4  ">Women Clothes</h2>

            <Link
              to="/women"
              className="text-light text-decoration-none  fs-4"
            >
              <img src={women} alt="woman"  className="w-75 d-block mx-auto img-fluid"/>
            </Link>
            </div>
            
          </div>
          <div className="col-md-6 mb-5">
            <div className="category-img bg-light py-4">
            <h2 className=" mb-4 ">Men Clothes</h2>

            <Link
              to="/men"
              className="text-light text-decoration-none  fs-4"
            >
              <img src={men} alt="men" className="w-75 d-block mx-auto"/>
            </Link>
            </div>
          
          </div>
          <div className="col-md-6 mb-5">
            <div className="category-img  bg-light py-4">
            <h2 className=" mb-4  ">Electronics</h2>

            <Link
              to="/elctronics"
              className="text-light text-decoration-none  fs-4"
            >
              <img src={electronics} alt="elctronics" className="w-75 d-block mx-auto"/>
            </Link>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};
export default Shop;
