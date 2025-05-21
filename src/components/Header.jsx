import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../assets/logo.webp';
import '../assets/styles/header.scss';
function Header() {
  return (
    <header >
      <Navbar bg="#ffe3c2" variant="#ffe3c2">
      <Container>
      <Navbar.Brand href="/">
        <img src={logo} alt="..." className="logo" />
      </Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="/">Accueil</Nav.Link>
      </Nav>
    </Container>
      </Navbar>
    </header>
  );
}

export default Header;