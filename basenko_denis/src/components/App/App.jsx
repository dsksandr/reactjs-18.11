import './App.css';

import React from 'react';
import { BrowserRouter, Route,  Switch} from "react-router-dom";

import { Messanger } from '../Messanger/Messanger';

export class App extends React.Component{
  render() {
    return(
      <BrowserRouter>
        <div className='app'>
          <Switch>
            <Route exact path='/' component={Messanger} />>
            <Route exact path='/chat/:chatId' component={Messanger}/>
          </Switch>
          
        </div>
      </BrowserRouter>
      )
    }
}