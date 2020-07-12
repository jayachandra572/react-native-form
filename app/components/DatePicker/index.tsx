import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

@observer
export default class MyDatePicker extends Component {
  @observable date = '';
  onChangeDate = (date: any) => {
    this.date = date;
  };
  render() {
    return (
      <DatePicker
        mode="date"
        date={this.date}
        showIcon={false}
        placeholder="select date"
        format="DD-MM-YYYY"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={this.onChangeDate}
        customStyles={{
          dateTouchBody: {
            width: 100,
            borderRadius: 10,
          },
        }}
      />
    );
  }
}
