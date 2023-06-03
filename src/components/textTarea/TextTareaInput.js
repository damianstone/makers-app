import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

const TextTareaInput = ({ label, value, handleChange }) => {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <InputLabel>{label}</InputLabel>
      <TextareaAutosize
        minRows={5}
        placeholder='Minimum 3 rows'
        style={{ width: 500, maxWidth: '100%' }}
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
};

export default TextTareaInput;
