import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Button, Menu, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import * as React from 'react';
import Info from './info/Index';
import DaoInput from './search/Index';
const DaoHome = () => {
  // const top100Films = [{ label: '1' }, { label: '2' }, { label: '3' }, { label: '4' }];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const MenuItemConfig = ['Dev', 'Team', 'Idea', 'Create'];
  const Data = [
    {
      name: '12',
      Avatar: 'Avatar',
      member: 'MEMBER',
      join: '1',
    },
    {
      name: 'na23me',
      Avatar: 'Avatar',
      member: 'MEMBER',
      join: '1',
    },
    {
      name: '45444',
      Avatar: 'Avatar',
      member: 'MEMBER',
      join: '1',
    },
    {
      name: 'nam33e',
      Avatar: 'Avatar',
      member: 'MEMBER',
      join: '1',
    },
    {
      name: 'na111111me',
      Avatar: 'Avatar',
      member: 'MEMBER',
      join: '1',
    },
    {
      name: 'name11',
      Avatar: 'Avatar',
      member: 'MEMBER',
      join: '1',
    },
  ];
  return (
    <Box className="w-full m-auto bg-primary  text-white  ">
      <Box className="w-full flex flex-row justify-between items-center pb-24">
        <Box className="flex items-center ">
          <DaoInput></DaoInput>
          <Box bgcolor={'#0C0633'} marginLeft={'10px'}>
            <Button
              sx={{
                height: 45,
                display: 'flex',
                alignItems: 'center',
                borderRadius: 23,
                background: '#0C0633',
                border: '1px solid #282828',
                color: '#fff',
                '&:hover': { border: '1px solid #818994' },
              }}
              startIcon={<WidgetsIcon />}
              endIcon={<KeyboardArrowDownIcon />}
              variant="outlined"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
              DAON
            </Button>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={Fade}>
              {MenuItemConfig.map(item => (
                <MenuItem onClick={handleClose} key={item} sx={{ width: 122 }}>
                  <Box>{item}</Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 100, height: 45, background: '#0C0633', border: '1px solid #282828', marginLeft: 2 }}
            renderInput={params => <TextField sx={{ background: '#0C0633' }} {...params} label="Daos" />}
          /> */}
        </Box>
        <Box className="mr-10 text-20 font-bold">{'sum'} Daos</Box>
      </Box>
      <Box className="flex justify-start flex-wrap">
        {Data.map(item => (
          <Info data={item} key={item.name}></Info>
        ))}
      </Box>

      {/* <Box
        sx={{
          width: 225,
          height: 280,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '12px',
          background: '#0C0633',
          border: '1px solid #282828',
          color: '#fff',
          '&:hover': { border: '1px solid #818994' },
        }}>
        <Box>
          <Avatar sx={{ width: 82, height: 82 }}></Avatar>
        </Box>
        <Box className="text-22 pt-11">{'DAO NAME'}</Box>
        <Box sx={{ paddingY: '12px', color: 'gray' }}>{'DAO '}MEMBER</Box>
        <Box sx={{ paddingX: '40px', paddingY: '8px', cursor: 'pointer', border: '1px solid #282828', borderRadius: '45px', '&:hover': { border: '1px solid #818994' } }}>JOIN</Box>
      </Box> */}
    </Box>
  );
};
export default DaoHome;
