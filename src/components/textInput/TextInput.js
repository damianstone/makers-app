import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextInput = () => {
  return (
    <div className='inputComponent'>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField fullWidth label='fullWidth' id='fullWidth' />
      </Box>
    </div>
  );
};

export default TextInput;