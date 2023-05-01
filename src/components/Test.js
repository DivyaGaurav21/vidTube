import React from 'react'
import { Button , Stack } from '@mui/material';


const Test = () => {
  return (
    <div>
      <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <p>Divya Gaurav</p>
    </Stack>
    </div>
  )
}

export default Test;