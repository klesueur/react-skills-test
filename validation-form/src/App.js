import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

export default function App() {
  return <div style={{ padding: 30 }}>
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <TextField InputLabelProps={{ shrink: true }} />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    </FormControl>
  </div>;
}