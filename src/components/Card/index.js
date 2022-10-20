import React from 'react'
import '../../styles/Components/Card/Card.css'
import Card from 'react-bootstrap/Card';

const CardComp = (props) => {
const {title, description, urlImage} = props;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={urlImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardComp;