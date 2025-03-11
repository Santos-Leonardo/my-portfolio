import React from 'react'

import styles from "./home.module.css"
import Head from './sections/head/Head';
import Passion from './sections/passion/Passion';
import HomeProjects from './sections/projects/HomeProjects';

const Home = () => {

    return (
        <main>
            <Head />
            <Passion />
            <HomeProjects />
        </main>
    )
}

export default Home;
