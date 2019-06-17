import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppBar>
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <AccountCircle />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
