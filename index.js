/**
 * @format
 */


import {AppRegistry} from 'react-native';

import App from './src/screens/App';
import Login from './src/screens/Login';


import {name as appName} from './app.json';
import React from 'react'


const Index = () => {
    return <Login email="myemail@mail.com" />;
}

AppRegistry.registerComponent(appName, () => Index);