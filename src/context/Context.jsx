import React from 'react'

import { EN } from '../dictionary/EN';
import { PT } from '../dictionary/PT';
import PROJECTS from '../assets/data/PROJECTS';
import SKILLS from '../assets/data/SKILLS';

export const Context = React.createContext();

export const ContextStorage = ({ children }) => {

    const [systemLanguage, setSystemLanguage] = React.useState('EN');

    const changeSystemLanguage = () => {
        systemLanguage === 'EN' ? setSystemLanguage('PT') : setSystemLanguage('EN');
    }
    
    const contextValue = {

        dictionary: systemLanguage === 'EN' ? EN : PT,
        systemLanguage,
        changeSystemLanguage,
        PROJECTS,
        SKILLS
    };

    return <Context.Provider value={ contextValue }>{ children }</Context.Provider>
};
