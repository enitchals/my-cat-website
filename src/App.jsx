import { useEffect, useState } from 'react'
import './App.css'
import RandomPic from './components/RandomPic'

function App() {
  const [catImgUrl, setCatImgUrl] = useState('')

  useEffect(() => {
    async function getRandomImage(){
      const response = await fetch('https://api.thecatapi.com/v1/images/search')
      const result = await response.json()
      setCatImgUrl(result[0].url)
    }
    getRandomImage()
  }, [])

  const updateImage = async() => {
    console.log("updateImage function is being called!")
    const response = await fetch('https://api.thecatapi.com/v1/images/search')
    const result = await response.json()
    setCatImgUrl(result[0].url)
  }

  return (
    <>
      {/* make an input that selects a specific cat breed (start with hard-coded options) */}
      {/* record the cat breed in the App component state */}
      {/* if we are searching for a specific breed, apply that criteria to the fetch request */}
      {/* then, fetch the breeds list and update the input to use the list of available breeds */}
      <RandomPic imgUrl={catImgUrl} refetchFunction={updateImage}/>
    </>
  )
}

export default App
