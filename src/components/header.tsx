import * as React from 'react';
import Greeting from './greeting';
const logo = require('../logo.svg');

export default () => (
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting greeting="Welcome to vanilla React + Typescript" />
    </div>
);
