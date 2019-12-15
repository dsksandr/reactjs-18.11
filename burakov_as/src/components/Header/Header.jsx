import './Header.css';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export class Header extends PureComponent{
  render() {
    const { chats } = this.props;

    return (
      <div>
        <header>
          {
            chats && chats.length && <ul>
              {chats.map((chat, idx) => <li key={idx}>{chat.name}</li>)}
            </ul>
          }
        </header>

        <Grid container>
          <Grid item xs={12}>
            <Paper className="paper">
            
              <Link className="no-decor" to="/profile">  
              <Button variant="contained" color="primary">
                Profile
              </Button>
              </Link>
            </Paper>   
          </Grid>
        </Grid>
      </div>
    )
  }
}