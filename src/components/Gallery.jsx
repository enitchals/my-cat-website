import { ImageList, ImageListItem } from "@mui/material"

// the <Gallery/> copmonent only needs one prop: the array of image URLs representing our favorite cat pictures.
function Gallery({favoritesArray}) {
  return (
    // use MUI ImageList component to auto-size our images into a gallery view
    <ImageList sx={{width:'80vw', height: '80vh'}} cols={5} rowHeight={100}>
      {/* turn our array of URLs into an array of ImageListItem components */}
      {favoritesArray.map((favCatUrl) => {
        return(
          <ImageListItem key={favCatUrl}>
            {/* each URL in the favoritesArray prop is the src for an img */}
            <img src={favCatUrl} />
          </ImageListItem>
        )
      })}
    </ImageList>
  )
}

export default Gallery

