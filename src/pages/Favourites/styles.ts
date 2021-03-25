import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 20px 0px;
`;
export const Title = styled.Text`
  font-size: 24px;
  color: #222;
  font-family: 'RobotoSlab-Regular';
`;
export const EnterpriseCard = styled.View`
  flex: 11;
  margin-top: 10px;
  width: 100%;
  height: 120px;
  background-color: #ffff;
  border-radius: 12px;
  border-width: 1px;
  border-color: #f1f2f3;
  padding: 4px;
  flex-direction: row;
  justify-content: space-between;
`;
export const EnterpriseCardImage = styled.Image`
  flex: 5;
  height: 110px;
  border-radius: 12px;
`;
export const EnterpriseCardDetails = styled.View`
  flex: 5;
  padding-top: 6px;
  padding-left: 6px;
  height: 90px;
  background-color: #fff;
  border-radius: 4px;
  flex-direction: column;
  justify-content: space-between;
`;
export const EnterpriseNameText = styled.Text`
  font-size: ${props => (props.size ? props.size : 14)}px;
  color: ${props => (props.color ? props.color : '#000')};
  font-family: 'Lexend-Regular';
`;
export const FormContainer = styled.View`
  flex-direction: row;
`;
