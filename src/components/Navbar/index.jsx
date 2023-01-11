import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import "./NavContainer.css"
import { NavLink } from "react-router-dom";
import { FaOpencart } from "react-icons/fa"; 

function NavContainer() {
  const globalAuthVal = useSelector((state) => state.auth.valid);
  const globeCartCount = useSelector((state) => state.cartAmount.cartVal);
  return (
    <Navbar className= "  navbar-dark  nav-bg d-flex text-align-center py-0" expand="lg">
      <Container fluid>
          <NavLink
            to="/" end
            className={(navData) =>
              navData.isActive
                ? " text-light text-decoration-none px-2 fw-bold fs-1 my-2 border mx-1"
                : "text-light text-decoration-none px-1 fw-bold fs-1 my-2 pt-0 mx-1"
            }
          >
           E-Shop
          </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 text-align-center"
            navbarScroll
          >
            <NavLink
              to="/featured" 
              className={(navData) =>
                navData.isActive
                  ? " border text-light text-decoration-none  fw-bold fs-5 px-1 mx-1"
                  : "text-light text-decoration-none  fw-bold fs-5 px-1 mx-1"
              }
            >
               <i aria-hidden="true" className="home  icon" ></i>
              Featured
            </NavLink>

            <NavLink
              to="/cart"
              className={(navData) =>
                navData.isActive
                  ? " border text-light text-decoration-none  fw-bold fs-5 px-1 mx-1"
                  : "text-light text-decoration-none  fw-bold fs-5 px-1 mx-1"
              }
            >
              <FaOpencart className="fs-1 me-1" />
              <span className="text-white ">{globeCartCount}</span>
            </NavLink>
           

         
         
            <NavLink
              to="/register"
              className={(navData) =>
                navData.isActive
                  ? " border text-light text-decoration-none px-2 fw-bold fs-5 px-1 mx-1"
                  : "text-light text-decoration-none fw-bold fs-5 px-1 mx-1"
              }
            >
              {globalAuthVal ? "Sign in" : "Sign up"}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavContainer;
