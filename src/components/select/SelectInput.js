import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';

const SelectInput = ({ options, label, value, handleChange }) => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={handleChange} fullWidth label='Age'>
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SelectInput;
