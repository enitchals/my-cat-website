import { Button, Stack } from "@mui/material"
import './RandomPic.css'

// the <RandomPic/> component takes three props:
// imgUrl is the URL of the current random image
// refetchFunction is a function that will get a new random image from the API
// addToFavorites is a function that will add an image URL to the favorites list
function RandomPic({imgUrl, refetchFunction, addToFavorites}) {
  return(
    <>
    {/* organize buttons using a Stack from MUI */}
      <Stack spacing={2} direction="row">
        {/* New Cat button calls our refetchFunction prop. This function doesn't take any parameters, so we can pass the name of the function as our onClick value. */}
        <Button onClick={refetchFunction} variant="outlined" color="success">New Cat</Button>
        {/* Add Favorite button adds the current imgUrl to the favorites list in our App component. This function takes one parameter (imgUrl), so we have to define an anonymous arrow function that calls addToFavorites and passes in the parameter. */}
        <Button onClick={() => addToFavorites(imgUrl)} variant="outlined" color="success">Add Favorite</Button>
      </Stack>
      <br/><br/>
      {/* Display the current random image */}
      <img className="random-pic" src={imgUrl}/>
    </>
  )
}

export default RandomPic
