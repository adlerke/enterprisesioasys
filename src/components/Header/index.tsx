import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import imgLogo from '../../assets/logo_ioasys.png';
import {useAuth} from '../../hooks/auth';

import {Container} from './styles';

const Header: React.FC = () => {
  const {signOut} = useAuth();
  return (
    <Container>
      <Image style={{width: 100, height: 30}} source={imgLogo} />
      <TouchableOpacity
        onPress={() => {
          signOut();
        }}>
        <AntIcon name="logout" color="#dc1637" size={20} />
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
