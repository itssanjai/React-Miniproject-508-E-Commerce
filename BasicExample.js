import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Discount Dealer</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link href="#Signup">Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

     
    </>
  );
}

export default ColorSchemesExample;