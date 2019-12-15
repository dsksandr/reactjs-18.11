import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import {Link} from 'react-router-dom'

export class ChatList extends Component {
    render() {
        return (
            <SimpleList/>
        )
    }
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function SimpleList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="Active chats">
                <Link to={"/chats/1"}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Chat1"/>
                    </ListItem>
                </Link>
                <Link to={"/chats/2"}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Chat2"/>
                    </ListItem>
                </Link>
            </List>
            <Divider/>
            <List component="nav" aria-label="Inactive chats">
                <Link to={"/chats/3"}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Chat3"/>
                    </ListItem>
                </Link>
                <Link to={"/chats/4"}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Chat4"/>
                    </ListItem>
                </Link>
            </List>
        </div>
    );
}

