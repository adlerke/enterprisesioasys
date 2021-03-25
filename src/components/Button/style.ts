import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 60px;
  background: #dc1637;
  border-radius: 4px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  font-family: 'Lexend-Medium';
  color: #f1f2f3;
  font-size: 18px;
`;
