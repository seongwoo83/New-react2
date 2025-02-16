import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import data from './data';
import {Container, Navbar, Nav, Row, Col} from 'react-bootstrap';

function App() {

  let [shoes] = useState(data)

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
            <Nav.Link href="#community">Community</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      
      <Container>
        <Row>
        {
          shoes.map((a,i)=>{
            return <Card shoes={shoes[i]} index={i} key={i}></Card> 
          })
        }
        </Row>
      </Container>

    </div>
    </>
  )
}

function Card(props){
  return(
    <Col className='col-4'>
      <img src={'https://codingapple1.github.io/shop/shoes'+(props.index + 1)+'.jpg'} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  )
}

export default App
