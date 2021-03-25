import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
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

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerTextIcon = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
export const TagView = styled.View`
  display: flex;
  justify-content: center;
  padding: 2px;
  align-items: center;
  background-color: #dcdbf3;
  border-left-color: #413fb5;
  border-left-width: 6px;
`;
export const EnterpriseNameText = styled.Text`
  font-size: ${props => (props.size ? props.size : 14)}px;
  color: ${props => (props.color ? props.color : '#000')};
  font-family: 'Lexend-Regular';
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
