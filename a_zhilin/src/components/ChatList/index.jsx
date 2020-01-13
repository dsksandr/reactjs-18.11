import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email'
import DraftsIcon from '@material-ui/icons/Drafts'
import AddBoxIcon from '@material-ui/icons/AddBox'
import PropTypes from 'prop-types'
// import Fab from '@material-ui/core/Fab'
// import RemoveIcon from '@material-ui/icons/Remove'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    borderRight: '1px solid rgba(0, 0, 0, .1)',
    backgroundColor: theme.palette.background.paper
  }
}))

moment.locale('ru')

const ChatList = ({ chats, addChat }) => {
  const classes = useStyles()

  return (
    <section className={classes.root} id='chat-list'>
      <List component='nav' aria-label='main mailbox folders'>
        {chats.map((chat, indx) => {
          return (
            <Link key={indx} to={chat.link}>
              <ListItem button>
                <ListItemIcon>
                  {!chat.read ? <EmailIcon /> : <DraftsIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={`[${moment(chat.timestamp).format('ll')}] ${
                    chat.name
                  }`}
                />
              </ListItem>
              {/* <Fab variant={'round'} */}
              {/*     colore={'primary'} */}
              {/*     onClick={removeChat(chat._id)}> */}
              {/*  <RemoveIcon /> */}
              {/* </Fab> */}
            </Link>
          )
        })}
        <ListItem button onClick={addChat}>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary='Добавить чат' />
        </ListItem>
      </List>
    </section>
  )
}

ChatList.propTypes = {
  addChat: PropTypes.func.isRequired,
  chats: PropTypes.array.isRequired
}

export default ChatList
