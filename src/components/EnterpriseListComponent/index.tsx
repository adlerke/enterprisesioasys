import React from 'react';
import {Text} from 'react-native';
import NumberFormat from 'react-number-format';
import FavButton from '../FavButton';
import {useNavigation} from '@react-navigation/native';

import {
  EnterpriseCard,
  EnterpriseCardDetails,
  EnterpriseCardImage,
  EnterpriseNameText,
} from './styles';
interface IEnterprise {
  id: number;
  enterprise_name: string;
  photo: string;
  description: string;
  city: string;
  country: string;
  share_price: number;
}
interface Props {
  enterprises: IEnterprise[];
  favIcon: boolean;
}
const EnterpriseListComponent: React.FC<Props> = ({enterprises, favIcon}) => {
  const {navigate} = useNavigation();

  return (
    <>
      {enterprises.map(item => (
        <EnterpriseCard
          onPress={() => {
            navigate('Enterprise', {id: item.id});
          }}
          activeOpacity={0.8}
          key={item.id}>
          <EnterpriseCardImage
            source={{
              uri: `https://empresas.ioasys.com.br/${item.photo}`,
            }}
          />
          <EnterpriseCardDetails>
            <EnterpriseNameText>{item.enterprise_name}</EnterpriseNameText>
            <EnterpriseNameText size={12} color={'#333'}>
              {item.city} - {item.country}
            </EnterpriseNameText>
            <EnterpriseNameText size={12} color={'#333'}>
              <NumberFormat
                value={item.share_price}
                displayType={'text'}
                renderText={text => <Text>{text}</Text>}
                thousandSeparator={true}
                prefix={'$'}
              />
            </EnterpriseNameText>
          </EnterpriseCardDetails>
          {favIcon ? <FavButton enterprise={item} /> : <></>}
        </EnterpriseCard>
      ))}
    </>
  );
};

export default EnterpriseListComponent;
