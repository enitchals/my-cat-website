import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

function SelectBreed({selectedBreed, setSelectedBreed}) {

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
          <MenuItem value="asho">American Shorthair</MenuItem>
          <MenuItem value="amis">Australian Mist</MenuItem>
        </Select>
    </FormControl>
  )
}

export default SelectBreed
