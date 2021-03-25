import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 120}px;
  /* margin-top: 64px; */
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #222;
  font-family: 'Lexend-Regular';
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 16px;
`;
export const ForgotPasswordText = styled.Text`
  color: #555;
  font-size: 16px;
  font-family: 'Lexend-Regular';
`;
export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-top-width: 0.6px;
  border-top-color: #aaa;
  padding: 16px 0 16px;
  background-color: #e5e5e5;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const CreateAccountButtonText = styled.Text`
  color: #222;
  font-size: 16px;
  font-family: 'Lexend-Regular';
  margin-left: 8px;
`;
