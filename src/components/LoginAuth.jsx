import { useState } from "react";

export default function Authenticate({token}) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] =useState(null);
  const [username, setUsername]=useState(null);
  console.log(token)

  async function handleClick() {
    try{
      const response = await fetch(
        'https://fsa-jwt-practice.herokuapp.com/authenticate',
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        });
      const result = await response.json();
      console.log(result)
      setSuccessMessage(result.message);
      setUsername(result.data.username)
    } catch (error){

      setError(error.message);
      console.log(error)
    }
  }
  return( 
  <>
  {successMessage && <p>{successMessage}</p>}
  {error && <p>{error}</p>}
  {username && <p>{username}</p>}
  <button onClick={handleClick}>Proceed to</button>
  </>
  )}