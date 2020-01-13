import './style.scss'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

import AndroidIcon from '@material-ui/icons/Android'
import FaceIcon from '@material-ui/icons/Face'

import Message from './style'

export const messageType = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export class ItemMessage extends Component {
  createMessage = () => {
    const { author, text } = this.props

    return (
      <div className='message-text'>
        {author !== 'Bot' ? <FaceIcon /> : <AndroidIcon />}
        <span>{`${author}: ${text}`}</span>
      </div>
    )
  }

  render() {
    const { author, text } = this.props

    const classes = ClassNames(
      'message',
      author !== 'Bot' ? 'message-owner' : 'message-companion'
    )

    return (
      /**
       * @attr bool bgColor :different colors of messages between bot and user
       */
      <Message
        bgColor={author === 'Bot'}
        className={classes}
        message={author === '' ? text : this.createMessage()}
      />
    )
  }
}

ItemMessage.propTypes = messageType
