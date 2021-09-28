import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';

export default function App() {
  return <div style={{ padding: 30 }}>
    <div>
      <FormControl>
        <TextField id="name" error={false} variant="outlined" label="Name" />
        <FormHelperText error={false}>Full name please.</FormHelperText>
      </FormControl>
    </div>
    <div>
      <FormControl>
        <TextField id="email" error={false} variant="outlined" label="Email" />
        <FormHelperText error={false}>We'll never share your email.</FormHelperText>
      </FormControl>
    </div>
    <div>
      <FormControl>
        <TextField id="phone" error={false} variant="outlined" label="Phone Number" />
        <FormHelperText error={false}>Phone Number.</FormHelperText>
      </FormControl>
    </div>
    <div style={{ marginTop: 30 }}>
      <Button variant="contained">Submit</Button>
    </div>
  </div>;
}