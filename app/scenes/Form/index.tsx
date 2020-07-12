import React, {Component, createRef} from 'react';
import {View, Alert, Button} from 'react-native';

import {
  FirstAndLastNames,
  FormContainer,
  FirstName,
  LastName,
  MobileNumber,
  Email,
  Password,
  ConfirmPassword,
  Container,
  TitleContainer,
  Header,
  SubTitle,
  RadioButtonsContainer,
  TextAreaInput,
  AddressContainer,
  BranchAndDOBContainer,
  Title,
  TypeSpeedContainer,
  LinkText,
  TermsAndConditions,
} from './styledComponents';

import GroupedRadioButtons from '../../components/RadioButtonsGroup';
import DropDownPicker from '../../components/Picker';
import DatePicker from '../../components/DatePicker';
import SliderWrapper from '../../components/Slider';
import CheckboxWrapper from '../../components/CheckBox';

const genderOptions = [
  {id: '1', label: 'Male', value: 'MALE'},
  {id: '2', label: 'Female', value: 'FEMALE'},
  {id: '3', label: 'Other', value: 'OTHER'},
];
const branchOptions = [
  {
    id: '1',
    label: 'Mechanical',
    value: 'MECHANICAL',
  },
  {
    id: '2',
    label: 'CSE',
    value: 'CSE',
  },
  {
    id: '3',
    label: 'Civil',
    value: 'CIVIL',
  },
];
class Form extends Component {
  firstNameInputRef: React.RefObject<any> = createRef();
  lastNameInputRef: React.RefObject<any> = createRef();

  validateInput = (value: string) => {
    if (value === '') {
      Alert.alert('Fill the input field');
    } else {
      Alert.alert(value);
    }
  };

  renderFirstAndLastName = () => {
    return (
      <FirstAndLastNames>
        <FirstName
          placeholder="First Name"
          inputRef={this.firstNameInputRef}
          validateInput={this.validateInput}
          type="outlined"
        />
        <LastName
          placeholder="Last Name"
          inputRef={this.lastNameInputRef}
          validateInput={this.validateInput}
          type="outlined"
        />
      </FirstAndLastNames>
    );
  };
  renderEmailInput = () => {
    return <Email placeholder="Email" validateInput={this.validateInput} />;
  };
  renderMobileNumberInput = () => {
    return (
      <MobileNumber
        placeholder="Mobile Number"
        validateInput={this.validateInput}
        keyboardType="number-pad"
      />
    );
  };

  renderPasswordInput = () => {
    return (
      <Password
        secureTextEntry={true}
        placeholder="Password"
        validateInput={this.validateInput}
      />
    );
  };

  renderConfirmPasswordInput = () => {
    return (
      <ConfirmPassword
        secureTextEntry={true}
        placeholder="Confirm Password"
        validateInput={this.validateInput}
      />
    );
  };

  renderHeader = () => {
    return (
      <TitleContainer>
        <Header>Sign Up</Header>
        <SubTitle>Please fill in this form to create an account</SubTitle>
      </TitleContainer>
    );
  };

  renderGenderRadioButtons = () => {
    return (
      <>
        <Title>Select your gender</Title>
        <RadioButtonsContainer>
          <GroupedRadioButtons options={genderOptions} />
        </RadioButtonsContainer>
      </>
    );
  };

  renderAdreesInput = () => {
    return (
      <AddressContainer>
        <Title>Enter your address</Title>
        <TextAreaInput
          multiline={true}
          numberOfLines={6}
          style={{textAlignVertical: 'top'}}
          placeholder="Type your address here!..."
          validateInput={this.validateInput}
        />
      </AddressContainer>
    );
  };

  renderBranchAndDOB = () => {
    return (
      <BranchAndDOBContainer>
        <View style={{flex: 1, marginLeft: 10}}>
          <Title>Select your branch</Title>
          <DropDownPicker options={branchOptions} />
        </View>
        <View style={{flex: 0.6}}>
          <Title>DOB</Title>
          <DatePicker />
        </View>
      </BranchAndDOBContainer>
    );
  };

  renderTypingSpeed = () => {
    return (
      <TypeSpeedContainer>
        <Title>Set your typing speed</Title>
        <SliderWrapper maxValue={50} onChangeValue={this.onChangeValue} />
      </TypeSpeedContainer>
    );
  };

  onChangeValue = (value: any) => {
    Alert.alert(value);
  };

  renderTermsAndCondtions = () => {
    return (
      <TermsAndConditions>
        <CheckboxWrapper />
        <Title>
          I accept the <LinkText>Terms of Use </LinkText> &
          <LinkText> Privacy Policy</LinkText>
        </Title>
      </TermsAndConditions>
    );
  };

  submitForm = () => {
    Alert.alert('submitted');
  };

  render() {
    return (
      <Container>
        <FormContainer>
          {this.renderHeader()}
          {this.renderFirstAndLastName()}
          {this.renderMobileNumberInput()}
          {this.renderEmailInput()}
          {this.renderPasswordInput()}
          {this.renderConfirmPasswordInput()}
          {this.renderGenderRadioButtons()}
          {this.renderBranchAndDOB()}
          {this.renderAdreesInput()}
          {this.renderTypingSpeed()}
          {this.renderTermsAndCondtions()}
          <Button onPress={this.submitForm} title="Sign Up" />
        </FormContainer>
      </Container>
    );
  }
}

export default Form;
