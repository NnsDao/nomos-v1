import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Box, Button, Fade, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import ProposalItem from './proposalItem/Index';

const Proposal = () => {
  const MenuItemConfig = ['All', 'Open', 'Rejected', 'Accepted'];
  const [MenuActive, setMenuActive] = useState('all');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = string => {
    setMenuActive(string);
    setAnchorEl(null);
  };
  const data = ['1', '2', '3'];

  return (
    <Box>
      <Box className="flex justify-between pt-10 pb-20">
        <Box className="text-2xl font-bold">proposal</Box>
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
              fontWeight: '500',
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
            {MenuActive}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleClose(MenuActive)}
            TransitionComponent={Fade}>
            {MenuItemConfig.map(item => (
              <MenuItem onClick={() => handleClose(item)} key={item} sx={{ width: 122 }}>
                <Box sx={{ fontWeight: '500' }}>{item}</Box>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
      <ProposalItem></ProposalItem>
    </Box>
  );
};
export default Proposal;
