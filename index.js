/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/screens/App';
import {name as appName} from './app.json';
import Login from './src/screens/Login';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Login);
