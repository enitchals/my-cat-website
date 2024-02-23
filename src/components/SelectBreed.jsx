import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useEffect, useState } from "react"

// the <SelectBreed/> component takes two props
// selectedBreed is the currently selected breed id (four-letter code)
// setSelectedBreed is a function you can use to update the selected breed
function SelectBreed({selectedBreed, setSelectedBreed}) {
  // we'll use one additional piece of state in this component to hold a list of breed options that we'll fetch from the API
  const [breedList, setBreedList] = useState([])

  // like the useEffect hook in App.jsx, this useEffect has an empty dependency array -- so it will only run when the component first renders
  useEffect(() => {
    async function getBreedList(){
      // fetch the list of breeds
      const response = await fetch('https://api.thecatapi.com/v1/breeds')
      const result = await response.json()
      // store the breed list from the server in our component's state
      setBreedList(result)
    }
    getBreedList()
  }, [])

  return (
    <FormControl fullWidth>
      <InputLabel id="breed-select-label">Breed</InputLabel>
      <Select
        labelId="breed-select-label"
        id="breed-select"
        value={selectedBreed}
        label="Breed"
        onChange={(e) => setSelectedBreed(e.target.value)}
        >
          {/* MenuItem for no selection -- in other words, cat of any breed */}
          <MenuItem key="random" value="random">Random Cat (Any Breed)</MenuItem>
          {/* create a MenuItem component for each of the breeds in the list, with the four-letter breed.id code as the value and the human-readable breed.name as the MenuItem's display text */}
          {breedList.map(breed => <MenuItem key={breed.id} value={breed.id}>{breed.name}</MenuItem>)}
        </Select>
    </FormControl>
  )
}

export default SelectBreed
