import './style.scss'

import React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu'

import useStyles from './style'

const Header = () => {
  /**
   * @type object classes
   */
  const classes = useStyles()

  return (
    <div className={classes.root} id='header'>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Link to='/' className='header__logo'>
            <Typography variant='h6' className={classes.title}>
              MyChat
            </Typography>
          </Link>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
