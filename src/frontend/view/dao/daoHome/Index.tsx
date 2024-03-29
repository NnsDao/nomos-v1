import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Backdrop, Button, CircularProgress, Menu, MenuItem } from '@mui/material';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import * as React from 'react';
import { useTotalDaoLists } from '../../../api/dao_manager';
import { daoListFilter } from '../../../utils/helpers';
import Info from './info/Index';
import DaoInput from './search/Index';

const DaoHome = () => {
  // const top100Films = [{ label: '1' }, { label: '2' }, { label: '3' }, { label: '4' }];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const totalList = useTotalDaoLists();
  const [searchFilter, setSearchFilter] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let MenuItemConfig: any = totalList.data?.length
    ? // @ts-ignore
      [...new Set(totalList.data.map(item => item.tags).flat(Infinity))]
    : [];

  MenuItemConfig = ['ALL'].concat().concat(MenuItemConfig);
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

  const List = () => {
    if (totalList.isLoading) {
      // return <Skeleton variant="rectangular" />;
      return (
        <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      );
    }
    // if (totalList.error || !totalList.data?.length) {
    //   return (
    //     <Box sx={{ textAlign: 'center', margin: '0 auto' }}>
    //       <HelpOutlineOutlinedIcon fontSize="large"></HelpOutlineOutlinedIcon>
    //       <div className="px-16">NO DATA</div>
    //     </Box>
    //   );
    // }
    // if (!totalList.data?.length) {
    //   return Data.map(item => <Info data={item} key={item.name}></Info>);
    // }

    return daoListFilter(totalList.data, searchFilter).map(item => <Info data={item} key={item.id}></Info>);
  };
  function handleMenuItemClick(e, index: number): void {
    setSelectedIndex(index);
    handleClose();
  }

  return (
    <div className="flex justify-center">
      <Box className="w-full m-auto bg-primary  text-white">
        <Box className="w-full flex flex-row justify-between items-center pb-24">
          <Box className="flex items-center ">
            <DaoInput onchange={setSearchFilter}></DaoInput>
            <Box bgcolor={'#000'} marginLeft={'10px'}>
              <Button
                sx={{
                  height: 45,
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: 23,
                  background: '#000',
                  border: '1px solid #282828',
                  color: '#fff',
                  '&:hover': { border: '1px solid #818994' },
                }}
                startIcon={<WidgetsIcon />}
                endIcon={<KeyboardArrowDownIcon />}
                variant="outlined"
                id="basic-button"
                onClick={handleClick}>
                {MenuItemConfig[selectedIndex]}
              </Button>
              <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={Fade}>
                {MenuItemConfig.map((item, index) => (
                  <MenuItem
                    onClick={e => handleMenuItemClick(e, index)}
                    key={String(item + index)}
                    sx={{ width: 122 }}
                    // disabled={index === 0}
                    selected={index === selectedIndex}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 100, height: 45, background: '#000', border: '1px solid #282828', marginLeft: 2 }}
            renderInput={params => <TextField sx={{ background: '#000' }} {...params} label="Daos" />}
          /> */}
          </Box>
          <Box className="mr-10 text-20 font-bold">{totalList.data?.length || 0} DAOs</Box>
        </Box>
        <Box className="flex justify-start flex-wrap">
          {/* @ts-ignore */}
          <List key="list"></List>
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
          background: '#000',
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
    </div>
  );
};
export default DaoHome;
