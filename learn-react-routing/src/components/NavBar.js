import React from 'react';
import {NavLink,Prompt} from 'react-router-dom';
import '../css/style.css';

function NavBar({loginStatus}) {
    return (
        <div className='navlinks'>
            <NavLink to='/' exact activeClassName='active-class'>Home</NavLink>
            <NavLink to='about' exact activeClassName='active-class'>About</NavLink>
            <NavLink to='/register' exact activeClassName='active-class'>Register</NavLink>
            <NavLink to='/userlist' exact activeClassName='active-class'>Show Users</NavLink>
            <NavLink to='/user/sinha' exact activeClassName='active-class'>User</NavLink>
            <Prompt 
          when={!loginStatus} 
          message={ (location) => {return location.pathname.startsWith('/user') ? 'You are logged out and wanna visit User Page' : true}
                   }
    />



        </div>
    )
}

export default NavBar


