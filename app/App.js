import React from 'react';
import 'normalize.css';
import './App.scss';

import reactLogo from './assets/images/react-transparent.png';


const App = () => {
    return (
        <>
            <h1>Hello React</h1>
            <br/>
            <img height="150" src={reactLogo} />
        </>
    )
};

export default App