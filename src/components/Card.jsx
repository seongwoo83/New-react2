import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Card(props){

  const navigate = useNavigate();

  const toDetail = (index)=>{
    navigate("/detail/"+index);
  }

  return(
  <Container>
    <Row>
    {
      props.shoes.map((v,i)=>{
        return (
        <Col className='col-4' key={i} onClick={()=>toDetail(i)}>
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