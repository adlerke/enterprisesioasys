import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 20px 0px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #999;
`;

export const Description = styled.Text`
  color: #999;
  padding-top: 15px;
  padding-bottom: 35px;
  font-size: 16px;
  text-align: center;
`;
export const UserInfoContainer = styled.View`
  justify-content: space-between;
  margin-top: 20px;
`;
export const ContainerTextIcon = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
export const EnterpriseNameText = styled.Text`
  font-size: ${props => (props.size ? props.size : 14)}px;
  color: ${props => (props.color ? props.color : '#000')};
  font-family: 'Lexend-Medium';
`;
export const EnterpriseNameTitle = styled.Text`
  font-size: ${props => (props.size ? props.size : 14)}px;
  color: ${props => (props.color ? props.color : '#000')};
  font-family: 'RobotoSlab-Regular';
`;
export const TextItem = styled.Text`
  font-size: 16px;
  color: #999;
`;
export const EnterpriseImage = styled.Image`
  height: 200px;
  border-radius: 10px;
`;
