import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Navbar, Nav, Row, Col} from 'react-bootstrap';

function App() {

  return (
    <>
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Wooniverse</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      
      <Container>
        <Row>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>

    </div>
    </>
  )
}

export default App
