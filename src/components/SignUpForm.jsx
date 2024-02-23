import { useState } from 'react'
import Button from '@mui/material/Button';

export default function SignUpForm({setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        'https://fsa-jwt-practice.herokuapp.com/signup',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password
          })
        }
      )
      const result = await response.json();
      setToken(result.token);
      console.log(result);

    }catch(error){
    setError(error.message);
    console.error(error);
  }}

  async function authorize(token) {
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

  return (
  <>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
      <label>
        Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br></br>
      <label>
        Password:  <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br></br>
      <br></br>
      <Button variant="contained">Submit</Button>
    </form>
  </>
);
}