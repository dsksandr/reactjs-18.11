import './ChatHeader.scss';

import React, { PureComponent } from 'react';
import Button from '@material-ui/core/Button';

export class ChatHeader extends PureComponent {
  render() {
    const { name, addChat } = this.props;

    return (
      <div className="chat-header">
        <div className="chat-header__logo">
        <Button variant="contained" color="primary" onClick={addChat}>
          Добавить чат
        </Button>
        </div>
        <div className="chat-header__name">
          {name}
        </div>
      </div>
    );
  }
}