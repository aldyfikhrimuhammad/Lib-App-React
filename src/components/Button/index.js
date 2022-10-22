import React from 'react'
import Button from 'react-bootstrap/Button';
import '../../styles/Components/Button/Button.css'

const ButtonComp = (props) => {
  const { buttonText } = props;
  return (
    <Button variant="warning" className='text-light shadow rounded text-center button-Comp' size="lg">{buttonText}</Button>
  )
}

export default ButtonComp