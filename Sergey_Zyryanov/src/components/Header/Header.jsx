import React, {Component} from "react";
import { Link } from 'react-router-dom';

import './Header.scss';
import Button from "@material-ui/core/Button";

export class Header extends Component{
  render() {
    return (
      <div className='header'>
        <Link to="/profile">
          <Button variant="contained" color="secondary">
            Профайл
          </Button>
        </Link>
        <Link to="/about">
          <Button variant="contained" color="primary">
            About
          </Button>
        </Link>
      </div>
    );
  }
}