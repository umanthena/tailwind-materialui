import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import './header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {user ? (
            <div>
              {user.name && (
                <span>Hello, {user.name}</span>
              )}
              <Button variant="contained" onClick={onLogout} sx={{ ml: 2 }}>Log out</Button>
            </div>
          ) : (
            <>
              <Button variant="outlined" color="inherit" onClick={onLogin}>Login</Button>
              <Button variant="contained" onClick={onCreateAccount} sx={{ ml: 2 }}>Sign up</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
