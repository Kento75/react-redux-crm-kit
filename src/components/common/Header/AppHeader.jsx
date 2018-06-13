import React from 'react';
import { Link } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';

const muiTheme = createMuiTheme();

class AppHeader extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <MuiThemeProvider theme={muiTheme}>
        <div>
          <header>
            <AppBar position="static">
              <Toolbar>
                <IconButton onClick={this.handleClick}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                  Title
                </Typography>
                <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
                  <MenuItem>
                    <Link to="/" style={{textDecorationLine: 'none'}}>TOP</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/hello" style={{textDecorationLine: 'none'}}>HelloWorld</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/search" style={{textDecorationLine: 'none'}}>検索画面</Link>
                  </MenuItem>
                </Menu>
              </Toolbar>
            </AppBar>
          </header>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AppHeader;
