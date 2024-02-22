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

  return (
    <>
      <RandomPic imgUrl={catImgUrl}/>
    </>
  )
}

export default App
