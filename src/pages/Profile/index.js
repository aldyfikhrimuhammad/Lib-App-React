import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";
import Navbar from '../../components/Navbar'

const Profile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((responseAxios) => {
        console.log(responseAxios);
        setUsers(responseAxios.data);
      });
  }, []);

  return (
    <div>
    <Navbar/>
      <div className="card">
        {users.map((user) => {
          return (
            <Card
              name={user.name}
              username={user.username}
              email={user.email}
              street={user.address.street}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
