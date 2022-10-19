import React from 'react'
import '../../styles/Components/Card/Card.css'

const Card = (props) => {
const {name, username, email, street} = props;
  return (
    <div className="card">
      <table>
        <tr>
          <td>Name</td>
          <td>Username</td>
          <td>Email</td>
          <td>Address</td>
        </tr>
        <tr>
          <td>{name}</td>
          <td>{username}</td>
          <td>{email}</td>
          <td>{street}</td>
        </tr>
      </table>
    </div>
  )
}

export default Card;