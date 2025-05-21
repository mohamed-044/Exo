import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../assets/logo.webp';
import '../assets/styles/header.scss';
function Header({cartCount}) {
  return (
    <header >
      <Navbar >
      <Container>
      <Navbar.Brand href="/">
        <img src={logo} alt="..." className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
      <Nav className="ms-auto">
        <Nav.Link href="/">Accueil</Nav.Link>
        <Nav.Link href="/">Panier ({cartCount})</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
      </Navbar>
    </header>
  );
}

export default Header;