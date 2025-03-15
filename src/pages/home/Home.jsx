import React from 'react'

import Head from './sections/head/Head';
import Passion from './sections/passion/Passion';
import HomeProjects from './sections/projects/HomeProjects';
import Skills from './sections/skills/Skills';
import Services from './sections/services/Services';

const Home = () => {

    return (
        <main>
            <Head />
            <Passion />
            <HomeProjects />
            <Services />
            <Skills />
        </main>
    )
}

export default Home;
