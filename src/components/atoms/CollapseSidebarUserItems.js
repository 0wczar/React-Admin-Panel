import React from "react";
import List from "@material-ui/core/List";
import {ListItem} from "@material-ui/core";
import {ListItemIcon} from "@material-ui/core";
import { Link} from "react-router-dom";
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    userText: {
        textDecoration: 'none',
        color: 'gray',
        fontFamily: 'Arial',
        fontSize: '15px',
    },
}));


function CollapseSidebarUserItem() {
    const classes = useStyles();

    return(
        <div>
        <List>
              <ListItem button>
                <ListItemIcon />
                <Link 
                  to='/profile' 
                  className={classes.userText}>
                  Profile
                </Link>
              </ListItem>

              <ListItem button>
                <ListItemIcon />
                <Link 
                  to='/settings' 
                  className={classes.userText}>
                  Account Settings
                </Link>
              </ListItem>

              <ListItem button>
                <ListItemIcon />
                <Link 
                  to='/password'
                  className={classes.userText}>
                  Password
                </Link>
              </ListItem>

              <ListItem button>
                <ListItemIcon />
                <Link 
                  to='/billings' 
                  className={classes.userText}>
                  Billing
                </Link>
              </ListItem>
            </List>
    </div>
    );
}

export default CollapseSidebarUserItem;


