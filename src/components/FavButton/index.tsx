import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useFavourites} from '../../hooks/favourites';
import {Container} from './styles';

interface Props {
  enterprise: {
    id: number;
    enterprise_name: string;
    photo: string;
    description: string;
    city: string;
    country: string;
    share_price: number;
  };
}

const FavButton: React.FC<Props> = ({enterprise}) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const {addFavourite, removeFavourite, enterprises} = useFavourites();

  const verifyFavourite = useCallback(() => {
    const fav = enterprises.find(e => e.id === enterprise.id);
    if (fav) {
      setIsFavourite(true);
    }
  }, [enterprises, enterprise.id]);
  useEffect(() => {
    verifyFavourite();
  }, [verifyFavourite]);
  return (
    <Container>
      {isFavourite ? (
        <TouchableOpacity
          onPress={() => {
            removeFavourite(enterprise);
            setIsFavourite(false);
          }}>
          <AntIcon name="heart" size={18} color="#dc1637" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            addFavourite(enterprise);
          }}>
          <AntIcon name="hearto" size={18} color="#dc1637" />
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default FavButton;
