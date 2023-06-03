import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectInput = ({ options }) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: '75%' }}>
        <InputLabel id='demo-simple-select-autowidth-label'>Age</InputLabel>
        <Select
          labelId='demo-simple-select-autowidth-label'
          id='demo-simple-select-autowidth'
          value={age}
          onChange={handleChange}
          autoWidth
          label='Age'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectInput;
