import { useEffect, useState } from 'react'
import './App.css'
import RandomPic from './components/RandomPic'
import SelectBreed from './components/SelectBreed'
import Gallery from './components/Gallery'
import { Button, Stack } from '@mui/material'

function App() {
  const [catImgUrl, setCatImgUrl] = useState('')
  const [selectedBreed, setSelectedBreed] = useState('random')
  const [favorites, setFavorites] = useState([])
  const [visibleTab, setVisibleTab] = useState('random')

  useEffect(() => {
    async function getRandomImage(){
      const response = await fetch(fetchUrl)
      const result = await response.json()
      setCatImgUrl(result[0].url)
    }
    getRandomImage()
  }, [])

  const updateImage = async() => {
    console.log("updateImage function is being called!")
    const response = await fetch(fetchUrl)
    const result = await response.json()
    setCatImgUrl(result[0].url)
  }

  const addToFavorites = (imgUrl) => {
    const newArray = [...favorites, imgUrl]
    setFavorites(newArray)
  }

  console.log(selectedBreed)
  console.log(favorites)

  const API_URL = `https://api.thecatapi.com/v1/images/search`
  const queryString = `?breed_ids=${selectedBreed}`

  const fetchUrl = selectedBreed === 'random'
    ? API_URL
    : API_URL + queryString

    console.log(fetchUrl)

  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => setVisibleTab('random')}>Random</Button>
        <Button variant="contained" onClick={() => setVisibleTab('favorites')}>Favorites</Button>
      </Stack>
      <br/><br/>
      <SelectBreed selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} />
      <br/><br/>
      {visibleTab === 'random' && <RandomPic imgUrl={catImgUrl} refetchFunction={updateImage} addToFavorites={addToFavorites}/>}
      <br/><br/>
      {visibleTab === 'favorites' && <Gallery favoritesArray={favorites} />}
    </>
  )
}

export default App
