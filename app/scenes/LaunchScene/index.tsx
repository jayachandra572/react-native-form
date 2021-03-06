import React, {Component, Fragment} from 'react';
import {Image, Text} from 'react-native';

import Images from '../../images';

import {LaunchScreenWrapper} from './styledComponents';
import DatePicker from '../../components/DatePicker';

class LaunchScene extends Component {
  render() {
    return (
      <Fragment>
        <LaunchScreenWrapper>
          <Image source={Images.ibHubsLogo} />
          <Text>Hello World</Text>
          <DatePicker />
        </LaunchScreenWrapper>
      </Fragment>
    );
  }
}

export default LaunchScene;
