import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}
interface InputIconProps {
  isFilled: boolean;
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0px 16px;
  background: #ffff;
  border-radius: 4px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #fff;

  ${props =>
    props.isErrored &&
    css`
      border-color: #f33000;
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: #77777760;
    `}
  
  flex-direction: row;
  align-items: center;
`;
export const TextInput = styled.TextInput`
  flex: 1;
  color: #444;
  font-size: 16px;
  font-family: 'Lexend-Regular';
`;

export const Icon = styled(FeatherIcon)<InputIconProps>`
  margin-right: 16px;
  color: #666360;

  ${props =>
    props.isFilled &&
    css`
      color: #222;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #222;
    `}
`;
export const TextError = styled.Text`
  color: #999;
  margin-bottom: 4px;
  font-size: 12px;
  font-family: 'Lexend-Regular';
`;
export const Divider = styled.View`
  height: 25px;
  width: 2px;
  background-color: #aaa;
  margin-right: 10px;
`;
