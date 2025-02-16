import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import data from './data';
import {Container, Navbar, Nav, Row, Col} from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  let [shoes] = useState(data)

  // Route - 각 페이지를 의미

  return (
    <>
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Wooniverse</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path='/' element={
          <>
            <div className="main-bg"></div>
            <Card shoes={shoes}/>
          </>
          } />
        <Route path='/detail' element={<Detail shoes={shoes}></Detail>} />
      </Routes>

      
      

    </div>
    </>
  )
}

function Card(props){
  return(
  <Container>
    <Row>
    {
      props.shoes.map((v,i)=>{
        return (
        <Col className='col-4' key={i}>
          <img src={'https://codingapple1.github.io/shop/shoes'+(i + 1)+'.jpg'} width="80%"/>
          <h4>{v.title}</h4>
          <p>{v.price}</p>
        </Col>
        ) 
      })
    }
    </Row>
  </Container>
  )
}


function Detail(props){
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+(props.i)+".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.title}</h4>
          <p>{props.content}</p>
          <p>{props.price원}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}
export default App
