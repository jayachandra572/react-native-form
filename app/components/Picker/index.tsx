import React, {Component} from 'react';
import {Picker} from 'react-native';
import {PickerWrapper} from './styledComponets';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

@observer
class DropDownPicker extends Component<any> {
  @observable selectedValue = '';

  onValueChange = (value: string) => {
    this.selectedValue = value;
  };
  renderPickerItem = ({item}: any) => {
    return <Picker.Item label={item.label} value={item.value} />;
  };
  renderPickerItemList = () => {
    const {options} = this.props;
    return options.map((object: any) => (
      <Picker.Item key={object.id} label={object.label} value={object.value} />
    ));
    // return (
    //   <FlatList
    //     data={options}
    //     renderItem={() => <Picker.Item label="Java" value="java" />}
    //     keyExtractor={(item: any) => item.id}
    //   />
    // );
  };
  render() {
    return (
      <PickerWrapper
        selectedValue={this.selectedValue}
        style={{height: 50, width: 150}}
        onValueChange={this.onValueChange}>
        {this.renderPickerItemList()}
      </PickerWrapper>
    );
  }
}

export default DropDownPicker;
