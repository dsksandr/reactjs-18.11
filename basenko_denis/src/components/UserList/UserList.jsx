import './userList.css'

import React from 'react';
import { Link } from 'react-router-dom'

export default class extends React.Component{
    render(){
        return(
            <div className='userList'>
                <ul className='userList__ul'>
                    <li className='userList__li userList__li_active'><Link className='userList__a' to='/chat/1'>OLEG</Link></li>
                    <li className='userList__li'><Link className='userList__a' to='/chat/2'>IVAN</Link></li>
                    <li className='userList__li'><Link className='userList__a' to='/chat/3'>VOVA</Link></li>
                    <li className='userList__li'><Link className='userList__a' to='/chat/4'>GLEB</Link></li>
                    <li className='userList__li'><Link className='userList__a' to='/chat/5'>VASYA</Link></li>
                </ul>
            </div>)
    }
}