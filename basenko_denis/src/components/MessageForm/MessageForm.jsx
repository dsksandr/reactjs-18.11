import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export class MessageForm extends React.Component{
    keyDownEnter = (event) => {
        if(event.ctrlKey && event.keyCode === 13){
            yhis.props.onSentMessage(event)
        }
    }
    render(){
        return<>
                <div className='textArea__wrapper_name'>
                    <TextField  required id="standard-required" 
                                onChange={this.props.onChangeName} 
                                placeholder='Your name...' 
                                type="text" name='author'/>
                </div>
                <TextField id="standard-basic" 
                            onChange={this.props.onChangeTextarea} 
                            onKeyDown={this.keyDownEnter} 
                            placeholder="New message..." 
                            value={this.props.newMessage}>
                </TextField>
                <div className='textArea__wrapper_button'>
                    <Button onClick={this.props.onSentMessage} 
                            variant="contained">sent
                    </Button>
                </div>
                </>
        }

}