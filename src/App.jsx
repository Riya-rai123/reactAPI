import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

  const BaseUrl = "https://jsonplaceholder.typicode.com";
  const UserUrl = `${BaseUrl}/users`;

  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(()=>{
    const fetchUsers= async()=>{
      try {
      const response=await axios.get(UserUrl);
      setUsers(response.data);
      }catch(e){
        console.error("Error fetching users", e);
      }
    };
    fetchUsers();
  },[]);

  return <>This is App component.
  {users.map(user=>{
    return<div key={user.id}>{user.name}</div>
  }
  )}
  </>;
};


export default App;
