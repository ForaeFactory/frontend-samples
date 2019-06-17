import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ImageIcon from '@material-ui/icons/Image';
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from '@material-ui/icons/Delete';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const SongList = ({ key, id, name, album, topSong, length, description, onDelete }) => {

  return (
    <List>
      <ListItem key={key} button>
        <ListItemAvatar>
          <ImageIcon />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={album} />
        <IconButton aria-label="Delete" onClick={() => onDelete(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </List>
  );
};


export default withStyles(styles)(SongList);

