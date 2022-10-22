import React from 'react'
import '../../styles/Components/Card/Card.css'
import Card from 'react-bootstrap/Card';

const CardComp = (props) => {
const {title, description, image} = props;
  return (
    <Card className='Card-Comp d-flex justify-content-space-between shadow-lg align-items-center flex-coloumn m-3'>
      <Card.Img variant="top" src={image} className='Img-Card' />
      <Card.Body>
        <Card.Title className='Title-Card'>{title}</Card.Title>
        <Card.Text className='Desc-Card'>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardComp;