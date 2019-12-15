import './Header.css'

import React from 'react'
import { Link } from 'react-router-dom'

export class Header extends React.Component{

    render(){
        return (
            <header className='header'>
                <Link className='header__a_profile' to='/profile'>Profile</Link>
            </header>
        )
    }

}