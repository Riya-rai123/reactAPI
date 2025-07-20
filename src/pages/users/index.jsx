import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { BaseUrl } from "../../App";
import { replace, useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate=useNavigate();
  const UserUrl = `${BaseUrl}/users`;

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${UserUrl}/${id}`);
      // const response = await axios.get(UserUrl);

      setUsers(users.filter((user) => user.id !== id));
    } catch (e) {
      console.error("Error deleting user:", e);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(UserUrl);
        setUsers(response.data);
      } catch (e) {
        console.error("Error fetching users:", e);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <button onClick={()=>navigate("/posts")}>Navigate to posts</button>
      {users.map((user) => (
        <Fragment key={user.id}>
          <div
            style={{
              backgroundColor: "lightblue",
              margin: "10px",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {user.name}
          </div>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => deleteUser(user.id)}
          >
            Delete {user.name}
          </button>
          <button
          onClick={()=> navigate(`users/${user.id}`, {replace:true})}
          >View user detail</button>
        </Fragment>
      ))}
    </div>
  );
};

export default Users;
