import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './TextInput.css';

const TextInput = ({ label, onChange, id }) => {
  return (
    <div className='inputComponent'>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField fullWidth label={label} id={id} onChange={onChange} />
      </Box>
    </div>
  );
};

export default TextInput;
