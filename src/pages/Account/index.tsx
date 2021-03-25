import React from 'react';
import {Text, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';
import NumberFormat from 'react-number-format';

import {useAuth} from '../../hooks/auth';
interface IUser {
  investor_name: string;
  email: string;
  city: string;
  country: string;
  portfolio_value: number;
}
import {
  Container,
  ContainerTextIcon,
  EnterpriseNameText,
  UserInfoContainer,
  EnterpriseNameTitle,
  EnterpriseImage,
} from './styles';

const Account: React.FC = () => {
  const auth = useAuth();
  const user = auth.user as IUser;
  return (
    <Container>
      <EnterpriseNameTitle color="#000" size={24}>
        Informações do Usuário
      </EnterpriseNameTitle>
      <UserInfoContainer>
        <EnterpriseImage
          source={{
            uri:
              'https://s3.sa-east-1.amazonaws.com/cdn.mercado.getway.com.br/static-images/not-found.png',
          }}
        />

        <ContainerTextIcon>
          <Icon name="user" size={18} color={'#8f0000'} />
          <EnterpriseNameText size={18} color="#434343">
            {' '}
            {user.investor_name}
          </EnterpriseNameText>
        </ContainerTextIcon>
        <ContainerTextIcon>
          <Icon name="mail" size={18} color={'#8f0000'} />
          <EnterpriseNameText size={18} color="#434343">
            {' '}
            {user.email}
          </EnterpriseNameText>
        </ContainerTextIcon>
        <ContainerTextIcon>
          <Icon name="enviromento" size={18} color={'#8f0000'} />
          <EnterpriseNameText size={18} color="#434343">
            {' '}
            {user.city} - {user.country}
          </EnterpriseNameText>
        </ContainerTextIcon>
        <ContainerTextIcon>
          <FeatherIcon name="dollar-sign" size={18} color={'#8f0000'} />
          <EnterpriseNameText size={18} color="#434343">
            {' '}
            <NumberFormat
              value={user.portfolio_value}
              displayType={'text'}
              renderText={text => <Text>{text}</Text>}
              thousandSeparator={true}
              prefix={'$'}
            />
          </EnterpriseNameText>
        </ContainerTextIcon>
      </UserInfoContainer>
    </Container>
  );
};

export default Account;
