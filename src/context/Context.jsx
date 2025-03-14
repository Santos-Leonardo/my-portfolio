import React from 'react'

import { EN } from '../dictionary/EN';
import { PT } from '../dictionary/PT';
import PROJECTS from '../assets/data/projects';

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
        PROJECTS
    }

    return <Context.Provider value={ contextValue }>{ children }</Context.Provider>
};
