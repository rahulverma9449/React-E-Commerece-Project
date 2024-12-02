
import { Navbar, Container, Nav} from 'react-bootstrap';

function Header() {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
  
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
  
  </Navbar></div>
  );
}

export default Header;
