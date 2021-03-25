import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface IEnterprise {
  id: number;
  enterprise_name: string;
  photo: string;
  description: string;
  city: string;
  country: string;
  share_price: number;
}

interface FavContext {
  enterprises: IEnterprise[];
  addFavourite(item: IEnterprise): void;
  removeFavourite(item: IEnterprise): void;
}

const FavContext = createContext<FavContext | null>(null);

const FavProvider: React.FC = ({children}) => {
  const [enterprises, setEnterprises] = useState<IEnterprise[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storagedEnterprises = await AsyncStorage.getItem(
        '@ioasys:favouriteEnterprises',
      );

      if (storagedEnterprises) {
        setEnterprises([...JSON.parse(storagedEnterprises)]);
      }
    }

    loadProducts();
  }, []);

  const addFavourite = useCallback(
    async enterprise => {
      const enterpriseExists = enterprises.find(e => e.id === enterprise.id);

      if (!enterpriseExists) {
        setEnterprises([...enterprises, enterprise]);
        await AsyncStorage.setItem(
          '@ioasys:favouriteEnterprises',
          JSON.stringify(enterprises),
        );
      }
    },
    [enterprises],
  );
  const removeFavourite = useCallback(
    async enterprise => {
      const enterpriseExists = enterprises.find(e => e.id === enterprise.id);

      if (enterpriseExists) {
        const data = enterprises.filter(e => e.id !== enterprise.id);
        setEnterprises(data);
        await AsyncStorage.setItem(
          '@ioasys:favouriteEnterprises',
          JSON.stringify(enterprises),
        );
      }
    },
    [enterprises],
  );

  const value = React.useMemo(
    () => ({addFavourite, removeFavourite, enterprises}),
    [addFavourite, removeFavourite, enterprises],
  );

  return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
};

function useFavourites(): FavContext {
  const context = useContext(FavContext);

  if (!context) {
    throw new Error('useFavourites must be used within a FavContext');
  }

  return context;
}

export {FavProvider, useFavourites};
