import React from 'react'

import Head from './sections/head/Head';
import Passion from './sections/passion/Passion';
import HomeProjects from './sections/projects/HomeProjects';
import Skills from './sections/skills/Skills';
import Services from './sections/services/Services';
import Experiences from './sections/experience/Experiences';
import Awards from './sections/awards/Awards';
import Recomendations from './sections/recomendations/Recomendations';

const Home = () => {

    return (
        <main>
            <Head />
            <Passion />
            <HomeProjects />
            <Services />
            <Skills />
            <Experiences />
            <Awards />
            <Recomendations />
        </main>
    )
}

export default Home;
