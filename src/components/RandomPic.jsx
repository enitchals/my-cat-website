import { Button } from "@mui/material"
import './RandomPic.css'

function RandomPic({imgUrl, refetchFunction, addToFavorites}) {
  return(
    <>
      <Button onClick={refetchFunction} variant="outlined" color="success">New Cat</Button>
      <Button onClick={() => addToFavorites(imgUrl)} variant="outlined" color="success">Add Favorite</Button>
      <br/><br/>
      <img className="random-pic" src={imgUrl}/>
    </>
  )
}

export default RandomPic
