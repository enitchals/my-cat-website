// things we're importing from libraries we installed using npm
import { useEffect, useState } from 'react'
import { Button, Stack } from '@mui/material'

// components we're importing from other files we made
import RandomPic from './components/RandomPic'
import SelectBreed from './components/SelectBreed'
import Gallery from './components/Gallery'

function App() {
  // catImgUrl represents the URL of the current random image from The Cat API
  const [catImgUrl, setCatImgUrl] = useState('')
  // selectedBreed represents the current selection in the SelectBreed component
  const [selectedBreed, setSelectedBreed] = useState('random')
  // favorites is an array of image URLs representing our favorite cats
  const [favorites, setFavorites] = useState([])
  // visibleTab is a string describing which component(s) we want to display
  const [visibleTab, setVisibleTab] = useState('random')

  // because this useEffect hook has an empty dependency array (the [] at the end), it will run ONCE when the component first loads.
  useEffect(() => {
    // fetching is asynchronous, but useEffect can't be an async function -- so we need to define our getRandomImage function *inside* useEffect, then call it right away
    async function getRandomImage(){
      // get some data from The Cat API
      const response = await fetch(fetchUrl)
      // turn that data into JSON that our app can use
      const result = await response.json()
      // set the catImgUrl state variable to the URL returned by the API
      // note that the "result" we get is an array with one object inside of it
      setCatImgUrl(result[0].url)
    }
    getRandomImage()
  }, [])

  // updateImage is a function we can call to get a new random cat image
  // note that this is the same code as our getRandomImage() function in useEffect -- but we won't be able to access that function from outside useEffect
  const updateImage = async() => {
    const response = await fetch(fetchUrl)
    const result = await response.json()
    setCatImgUrl(result[0].url)
  }

  // addToFavorites is a function we can call to add an image URL to the list of favorites
  const addToFavorites = (imgUrl) => {
    // make a new array without modifying the existing favorites array
    const newArray = [...favorites, imgUrl]
    // set that new array as our favorites
    setFavorites(newArray)
  }

  // the base URL for fetching one cat from The Cat API
  const API_URL = `https://api.thecatapi.com/v1/images/search`
  // the query string to add onto the base URL to get a random pic by breed
  const queryString = `?breed_ids=${selectedBreed}`

  // fetchUrl represents the URL we want to fetch a random cat pic from
  // if the selectedBreed is 'random', that means we want a cat of any breed
  // otherwise, add the four-letter breed code to the URL
  const fetchUrl = selectedBreed === 'random'
    ? API_URL
    : API_URL + queryString

  // this is what our <App/> component will render on the page
  return (
    <>
      {/* MUI Stack component for layout */}
      <Stack spacing={2} direction="row">
        {/* MUI Buttons that will change the visibleTab state variable */}
        <Button variant="contained" onClick={() => setVisibleTab('random')}>Random</Button>
        <Button variant="contained" onClick={() => setVisibleTab('favorites')}>Favorites</Button>
      </Stack>
      <br/><br/>
      {/* See ./components/SelectBreed.jsx for more notes */}
      <SelectBreed selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} />
      <br/><br/>
      {/* If the visibleTab state variable is currently set to 'random', display the <RandomPic/> component */}
      {visibleTab === 'random' && <RandomPic imgUrl={catImgUrl} refetchFunction={updateImage} addToFavorites={addToFavorites}/>}
      {/* If the visibleTab state variable is currently set to 'favorites', display the <Gallery/> component */}
      {visibleTab === 'favorites' && <Gallery favoritesArray={favorites} />}
    </>
  )
}

export default App
