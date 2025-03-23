import React from 'react'

import { EN } from '../dictionary/EN';
import { PT } from '../dictionary/PT';
import PROJECTS from '../assets/data/PROJECTS';
import SKILLS from '../assets/data/SKILLS';
import AWARDS from '../assets/data/AWARDS';
import EXPERIENCES from '../assets/data/EXPERIENCES';
import RECOMENDATIONS from '../assets/data/RECOMENDATIONS';

export const Context = React.createContext();

export const ContextStorage = ({ children }) => {

    const [systemLanguage, setSystemLanguage] = React.useState('EN');

    const changeSystemLanguage = () => {
        systemLanguage === 'EN' ? setSystemLanguage('PT') : setSystemLanguage('EN');
    }

    const footerRef = React.useRef(null);
    
    const contextValue = {

        dictionary: systemLanguage === 'EN' ? EN : PT,
        systemLanguage,
        changeSystemLanguage,
        footerRef,
        PROJECTS,
        SKILLS,
        AWARDS,
        EXPERIENCES,
        RECOMENDATIONS
    };

    return <Context.Provider value={ contextValue }>{ children }</Context.Provider>
};
