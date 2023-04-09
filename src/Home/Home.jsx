import React from 'react';
import Head from '../Header/Head';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Head></Head>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;