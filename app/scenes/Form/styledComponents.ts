import styled from 'styled-components/native';
import TextInputWrapper from '../../components/TextInput';

const styles = {
  'padding-left': '5px',
  flex: '1',
  'margin-bottom': '10px',
  'margin-top': '10px',
};
export const Container = styled.ScrollView`
  flex: 1;
  padding: 15px;

  background-color: dodgerblue;
`;
export const FormContainer = styled.View`
  background-color: white;
  padding: 10px;
  margin-bottom: 20px;
  color: grey;
`;
export const TitleContainer = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom-color: grey;
  border-bottom-width: 1px;
`;
export const Header = styled.Text`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const SubTitle = styled.Text`
  font-weight: 300;
  font-size: 14px;
  color: grey;
`;
export const FirstAndLastNames = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FirstName = styled(TextInputWrapper)`
  flex: 0.48;
`;

export const LastName = styled(TextInputWrapper)`
  flex: 0.48;
`;
export const MobileNumber = styled(TextInputWrapper)`
  ${styles}
`;
export const Email = styled(TextInputWrapper)`
  ${styles}
`;
export const Password = styled(TextInputWrapper)`
  ${styles}
`;

export const ConfirmPassword = styled(TextInputWrapper)`
  ${styles}
`;

export const RadioButtonsContainer = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const TextAreaInput = styled(TextInputWrapper)`
  height: 150px;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const AddressContainer = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  color: grey;
`;

export const BranchAndDOBContainer = styled.View`
  flex-direction: row;
  flex: 1;
`;
export const Title = styled.Text`
  color: grey;
  font-weight: 400;
`;

export const TypeSpeedContainer = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TermsAndConditions = styled.View`
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText = styled.Text`
  color: dodgerblue;
`;
