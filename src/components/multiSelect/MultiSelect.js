import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const getStyles = (name, personName, theme) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const MultipleSelect = ({ label, options }) => {
  const theme = useTheme();
  const [option, setOption] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setOption(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <InputLabel id='demo-multiple-name-label'>{label}</InputLabel>
      <Select
        labelId='demo-multiple-name-label'
        id='demo-multiple-name'
        multiple
        fullWidth
        value={option}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        MenuProps={MenuProps}
      >
        {options.map((value) => (
          <MenuItem
            key={value.id}
            value={value.label}
            style={getStyles(value.label, option, theme)}
          >
            {value.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default MultipleSelect;
