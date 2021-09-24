import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Divider, ListSubheader } from "@material-ui/core";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    //maxWidth: 360,
    color: "#000000",
    backgroundColor: theme.palette.background.paper,
  },
}));
const ListaVariables = (props) => {
  const classes = useStyles();
  const { variables } = props;
  return (
    <>
      <List
        className={classes.root}
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <p style={{ color: "#FF6C37" }}>Variables </p>
          </ListSubheader>
        }
      >
        <Divider />
        {variables.map((variable) => (
          <>
            <ListItem>
              <ListItemAvatar color="primary">
                <Avatar>
                  <VpnKeyIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${variable.key}`}
                secondary={`${variable.value}`}
              />
            </ListItem>
            <Divider />
          </>
        ))}
        {variables.length === 0 && (
          <>
            <ListItemText
              primary="No hay información disponible"
              secondary={null}
            />
          </>
        )}
      </List>
    </>
  );
};

export default ListaVariables;
