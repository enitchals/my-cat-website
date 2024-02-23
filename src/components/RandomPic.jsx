import { Button } from "@mui/material"
import './RandomPic.css'
import { Stack } from "@mui/material"


function RandomPic({imgUrl, addToFavorites, refetchFunction}) {
  return(
    <>
    <Stack  justifyContent="center"
  alignItems="center" spacing={2} direction="column">
      <img className="random-pic" src={imgUrl}/>
      <Button onClick={() => addToFavorites(imgUrl)} variant="outlined" color="success">Add Favorite</Button> 
      <Button onClick={refetchFunction} variant="outlined" color="success">New Cat</Button>
    </Stack>
    </>
  )
}

export default RandomPic
