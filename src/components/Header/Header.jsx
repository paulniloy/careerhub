import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div>
            </div>
            <div>
                <h1 className='text-xl'>FindJob</h1>
                <Link to='/'>Home</Link>
                <Link to='/statictics'>Statictics</Link>
                <Link to='/appliedjobs'>Applied jobs</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/blog'>Blog</Link>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Header;