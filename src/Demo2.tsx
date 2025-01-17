import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';

export default function BasicButtons() {
  return (

    <Box>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button>Wow</Button>
        <Button disabled>No way!</Button>
        <Button loading>Thats cray!</Button>
      </Box>
  
      
      <Box>
        <FormControl
          id="Id"
          required
          size="sm"
          color="primary">
          <FormLabel>
            Need help?
          </FormLabel>
          <Input
            placeholder="Placeholder"
            name="Name"
            type="tel"
            autoComplete="on"
           autoFocus
            error
            fullWidth
            defaultValue="Type"
           variant="outlined" />
          <FormHelperText>
           Too bad
          </FormHelperText>
        </FormControl>
      </Box>
    </Box>


  );
}
