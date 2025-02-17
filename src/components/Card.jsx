import { Row, Col, Container } from "react-bootstrap";
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

export default Card;