import React from 'react';
import {Slider} from 'react-native';

function SliderWrapper(props: any) {
  return (
    <Slider maximumValue={props.maxValue} onValueChange={props.onValueChange} />
  );
}

export default SliderWrapper;
