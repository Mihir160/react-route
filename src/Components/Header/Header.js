import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-12'> 
           <nav>
           {/* <Link to='/home' className='mr-5'>Home page</Link>
            <Link to='/about' className='mr-5'>About</Link>
            <Link to='/products' className='mr-5'>Products</Link>
            <Link to='/friends' className='mr-5'>Friends </Link>
            <Link to='posts' className='mr-5'>Posts</Link> */}


            <NavLink to='/home' className={({isActive})=> isActive ? 'active:bg-violet-700' : undefined}>Home page</NavLink>
            <NavLink to='/about' className='mr-5'>About</NavLink>
            <NavLink to='/products' className='mr-5'>Products</NavLink>
            <NavLink to='/friends' className='mr-5'>Friends </NavLink>
            <NavLink to='posts' className='mr-5'>Posts</NavLink>

           </nav>
           <p>Common Header</p>
        </div>
    );
};

export default Header;