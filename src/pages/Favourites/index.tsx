import React from 'react';
import EnterpriseListComponent from '../../components/EnterpriseListComponent';
import {useFavourites} from '../../hooks/favourites';
import {Container, Title, EnterpriseNameText} from './styles';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EmptySvg from '../../components/EmptySvg';
import {View} from 'react-native';
const Favourites: React.FC = () => {
  const {enterprises} = useFavourites();
  return (
    <Container showsVerticalScrollIndicator={false}>
      <Title>Favoritos</Title>
      {enterprises.length > 0 ? (
        <EnterpriseListComponent enterprises={enterprises} favIcon={false} />
      ) : (
        <View style={{marginTop: 30, right: -50, justifyContent: 'center'}}>
          <EmptySvg />
          <EnterpriseNameText>
            Você ainda não favoritou nenhuma empresa
          </EnterpriseNameText>
        </View>
      )}
    </Container>
  );
};

export default Favourites;
