import React, {Component} from 'react';
import {RadioButton} from 'react-native-paper';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {FlatList} from 'react-native';
interface RadioButtonObject {
  label: string;
  value: string;
}
@observer
class GroupedRadioButtons extends Component<any> {
  @observable value: string = '';
  renderRadioButton = ({item}: any) => {
    return <RadioButton.Item label={item.label} value={item.value} />;
  };

  onChangeValue = (value: string) => {
    this.value = value;
  };
  render() {
    return (
      <RadioButton.Group onValueChange={this.onChangeValue} value={this.value}>
        <FlatList
          horizontal={true}
          data={this.props.options}
          renderItem={this.renderRadioButton}
          keyExtractor={(item: any) => item.id}
        />
      </RadioButton.Group>
    );
  }
}

export default GroupedRadioButtons;
