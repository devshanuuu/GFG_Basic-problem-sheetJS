import axios from "axios";
import { useState, useEffect} from "react";

function users() {
  const[users, setUsers] = useState([])
  const[error, setError] = useState(null)
  const[loading, setLoading] = useState(true)

  async function getUsers() {
    try{
      const response = await axios.get("/api/users")
      setUsers(response.data)
    }catch(error) {
      setError(error.message)
    }finally {
      setLoading(false)
    }
  }

  if(loading) {
    <p>Loading...</p>
  }

  if(error) {
    <p>Error: {error}</p>
  }

  return(
    <div>
      {
        users.map(user=>{
          <p key = {user.id}>{user.name}</p>
        })
      }
    </div>
  );
}

export default users
