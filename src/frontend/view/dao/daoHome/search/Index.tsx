import DirectionsIcon from '@mui/icons-material/Directions';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';

export default function DaoInput() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Paper
      component="form"
      sx={{ height: 45, width: 420, display: 'flex', alignItems: 'center', borderRadius: 23, background: '#0C0633', border: '1px solid #818994', '&:hover': { border: '1px solid #fff' } }}>
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <SearchIcon htmlColor="#fff" />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1, color: '#fff', marginLeft: '0px' }} placeholder="Search for dao of interest" inputProps={{ 'aria-label': 'search google maps' }} />
      <Divider sx={{ height: '28px', width: '1px', m: 0.5, borderColor: '#282828' }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon htmlColor="#fff" />
      </IconButton>
    </Paper>
  );
}
