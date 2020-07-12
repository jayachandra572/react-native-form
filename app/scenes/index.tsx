import React from 'react';
import {Scene} from 'react-native-router-flux';

import {
  APP_LAUNCH_SCENE,
  APP_SCENE,
  APP_ANIMATE_SCENE,
} from '../constants/NavigationConstants';

import LaunchScene from './LaunchScene';
import AppScene from './AppScene';
import Example from './Form';

const scenes = [
  <Scene key={APP_ANIMATE_SCENE} component={Example} />,
  <Scene key={APP_LAUNCH_SCENE} component={LaunchScene} />,
  <Scene intial key={APP_SCENE} component={AppScene} />,
];

const modalScenes: any = [];

export {scenes as default, modalScenes};
