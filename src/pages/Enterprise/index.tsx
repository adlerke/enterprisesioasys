import React, {useCallback, useEffect, useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';

import {useAuth} from '../../hooks/auth';
import api from '../../services/api';

import {
  Container,
  ContainerTextIcon,
  EnterpriseNameText,
  Content,
  EnterpriseImage,
  EnterpriseNameTitle,
  TagView,
} from './style';
interface IEnterprise {
  id: number;
  enterprise_name: string;
  photo: string;
  description: string;
  city: string;
  country: string;
  share_price: number;
  enterprise_type: {
    id: number;
    enterprise_type_name: string;
  };
}
interface Props {
  route: any;
}

const Enterprise: React.FC<Props> = ({route}) => {
  const {id} = route.params;
  const [enterprise, setEnterprise] = useState<IEnterprise>({} as IEnterprise);

  const {signOut} = useAuth();
  const getEnterprise = useCallback(async () => {
    try {
      const response = await api.get(`/enterprises/${id}`);

      if (response.status === 200) {
        const data = response.data.enterprise;
        setEnterprise(data);
      }
    } catch (error) {
      if (error.response.status === 401) {
        signOut();
      }
      console.log('error request ', error);
    }
  }, [id, signOut]);
  useEffect(() => {
    getEnterprise();
  }, [getEnterprise]);
  return (
    <Container>
      <ScrollView contentContainerStyle={{flexGrow: 1, padding: 25}}>
        <EnterpriseImage
          source={{uri: `https://empresas.ioasys.com.br/${enterprise.photo}`}}
        />
        <EnterpriseNameTitle color="#000" size={24}>
          {enterprise.enterprise_name}
        </EnterpriseNameTitle>
        <TagView>
          <EnterpriseNameText size={14}>
            {enterprise.enterprise_type?.enterprise_type_name}
          </EnterpriseNameText>
        </TagView>

        <View style={{marginTop: 20}}>
          <View>
            <EnterpriseNameText>{enterprise.description} </EnterpriseNameText>
          </View>

          <Content>
            <View style={{justifyContent: 'space-between'}}>
              <ContainerTextIcon>
                <Icon
                  name="enviromento"
                  size={16}
                  style={{marginRight: 6}}
                  color={'#d60000'}
                />
                <EnterpriseNameText>
                  {enterprise.city} - {enterprise.country}
                </EnterpriseNameText>
              </ContainerTextIcon>
              <ContainerTextIcon>
                <FeatherIcon
                  name="dollar-sign"
                  size={16}
                  style={{marginRight: 6}}
                  color={'#d60000'}
                />
                <EnterpriseNameText>
                  {enterprise.share_price}
                </EnterpriseNameText>
              </ContainerTextIcon>
            </View>
          </Content>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Enterprise;
