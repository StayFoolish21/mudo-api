import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ini logo</Navbar.Brand>
        <Nav className="me-auto">
          <Link to={"/"}>
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>
          <Link to={"/login"}>
            <Nav.Link href="#link">Login</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
