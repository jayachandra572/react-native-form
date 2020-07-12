import React, {useState} from 'react';
import {TextInput} from './styledComponents';

function TextInputWrapper(props: any) {
  const [text, setText] = useState('');
  const {validateInput, ...rest} = props;
  return (
    <TextInput
      {...rest}
      value={text}
      onChangeText={(text: string) => setText(text)}
      onBlur={() => validateInput(text)}
    />
  );
}

export default TextInputWrapper;
