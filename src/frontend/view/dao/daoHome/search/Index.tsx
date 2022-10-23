import DirectionsIcon from '@mui/icons-material/Directions';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { useDebounce } from 'usehooks-ts';

export default function DaoInput(props) {
  const [searchStr, setSearch] = React.useState('');
  const debouncedSearchStr = useDebounce<string>(searchStr, 500);
  React.useEffect(() => {
    props.onchange(searchStr);
  }, [debouncedSearchStr]);

  const submit = e => {
    e.preventDefault();
    e.stopPropagation();
    props.onchange(searchStr);
    // console.log();
  };
  const search = e => {
    setSearch(e.currentTarget.value);
  };
  return (
    <Paper
      component="form"
      sx={{
        height: 45,
        width: 420,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 23,
        background: '#000',
        border: '1px solid #818994',
        '&:hover': { border: '1px solid #fff' },
      }}>
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <SearchIcon htmlColor="#fff" />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: '#fff', marginLeft: '0px' }}
        placeholder="Search for dao of interest"
        onChange={search}
      />
      <Divider sx={{ height: '28px', width: '1px', m: 0.5, borderColor: '#282828' }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} onClick={submit}>
        <DirectionsIcon htmlColor="#fff" />
      </IconButton>
    </Paper>
  );
}
