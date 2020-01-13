import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import App from 'components/App'
import { sendMessage, listen } from 'actions/chats'
import PropTypes from 'prop-types'

class AppContainer extends PureComponent {
  componentDidMount() {
    const { listen } = this.props
    listen()
  }

  handleMessageSend = message => {
    const { sendMessage, chatId } = this.props
    sendMessage({
      chatId,
      ...message
    })
  }

  render() {
    const { messages, chatName } = this.props

    return (
      <App
        messages={messages}
        chatName={chatName}
        sendMessage={this.handleMessageSend}
      />
    )
  }
}

AppContainer.propTypes = {
  listen: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  chatId: PropTypes.string,
  chatName: PropTypes.string,
  messages: PropTypes.array
}

AppContainer.defaultProps = {
  chatId: null,
  chatName: null,
  messages: null
}

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries')

  const { match } = ownProps

  let messages = null
  let chatName = null

  if (match && chats.has(match.params.id)) {
    messages = chats.getIn([match.params.id, 'messages']).toJS()
    chatName = chats.getIn([match.params.id, 'name'])
  }

  return {
    messages,
    chatName,
    chatId: match ? match.params.id : null
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage,
    listen: () => dispatch(listen())
  }
}

const AppRedux = connect(mapStateToProps, mapDispatchToProps)(AppContainer)

export default AppRedux
