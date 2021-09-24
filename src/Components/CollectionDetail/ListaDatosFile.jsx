import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Divider, ListSubheader } from "@material-ui/core";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import InfoIcon from "@material-ui/icons/Info";
import BlurLinearIcon from "@material-ui/icons/BlurLinear";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    //maxWidth: 360,
    color:"#000000",
    backgroundColor: theme.palette.background.paper,
  },
}));
const ListaDatosFile = (props) => {
  const classes = useStyles();
  const { infoContent } = props;
  return (
    <List
      className={classes.root}
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <p style={{color:"#FF6C37"}}>Datos generales </p>
        </ListSubheader>
      }
    >
      <Divider />

      <ListItem>
        <ListItemAvatar color="primary">
          <Avatar>
            <FeaturedPlayListIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={"Nombre:"} secondary={infoContent.name} />
      </ListItem>
      <Divider />

      <ListItem>
        <ListItemAvatar color="primary">
          <Avatar>
            <InfoIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={"Descripción:"}
          secondary={infoContent.description}
        />
      </ListItem>
      <Divider />
    </List>
  );
};

export default ListaDatosFile;
