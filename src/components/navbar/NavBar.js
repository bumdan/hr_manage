import React from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, InputAdornment, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PowerSettingNewIcon from "@mui/icons-material/PowerSettingsNew"
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [ anchorEl, setAnchorEl ] = React.useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  }
  return (
    <>
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5' sx={{ flexGrow: 1 }}>
          <Button color='inherit' component={Link} to="/">
            {/* <img src='' alt='Icon' style={{width: '200px', height: '50px'}}/> */}
            Super Juniors
          </Button>
        </Typography>
        <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: { border: '1px solid rgba(0, 0, 0, 0.23)', backgroundColor: 'white' }
            }}
          />
        <Typography variant='h4' sx={{ flexGrow: 0 }}>
          <Button color='inherit' component={Link} to="/employee">
            Employee List
          </Button>
          <Button color='inherit' component={Link} to="/add_employee">
            Add Employee
            </Button>
          <Button color='inherit' component={Link} to="/position">
            Position
            </Button>
        </Typography>
        <Tooltip title="Profile">
        <IconButton
          size='large'
          color='inherit'
          aria-label='profile'
          onClick={handleMenuOpen}
        >
          <AccountCircleIcon/>
        </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem>Bum Dan La Aung</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout&nbsp;&nbsp;<PowerSettingNewIcon/></MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
    </>
  );
}

export default NavBar;
