import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const CheckboxWrapper = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <CheckBox
      style={{alignSelf: 'center'}}
      value={isSelected}
      onValueChange={setSelection}
    />
  );
};

export default CheckboxWrapper;
