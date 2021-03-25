import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthState {
  investor: object;
  access_token?: string;
  client: string;
  uid: string;
}
interface AuthContextData {
  user: object;
  access_token?: string;
  client: string;
  uid: string;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFunctionData(): Promise<void> {
      const [
        investor,
        access_token,
        client,
        uid,
      ] = await AsyncStorage.multiGet([
        '@ioasys:investor',
        '@ioasys:access_token',
        '@ioasys:client',
        '@ioasys:uid',
      ]);

      if (investor[1] && access_token[1] && client[1] && uid[1]) {
        api.defaults.headers.common['access-token'] = `${JSON.parse(
          access_token[1],
        )}`;
        api.defaults.headers.client = `${JSON.parse(client[1])}`;
        api.defaults.headers.uid = `${JSON.parse(uid[1])}`;

        setData({
          investor: JSON.parse(investor[1]),
          access_token: JSON.parse(access_token[1]),
          client: JSON.parse(client[1]),
          uid: JSON.parse(uid[1]),
        });
      }

      setLoading(false);
    }
    loadFunctionData();
  }, []);

  const signIn = useCallback(async ({email, password}) => {
    try {
      const body = {
        email,
        password,
      };
      const response = await api.post('/users/auth/sign_in', body);

      if (response.status === 200) {
        const {'access-token': accessToken, client, uid} = response.headers;

        await AsyncStorage.multiSet([
          ['@ioasys:access_token', JSON.stringify(accessToken)],
          ['@ioasys:client', JSON.stringify(client)],
          ['@ioasys:uid', JSON.stringify(uid)],
          ['@ioasys:investor', JSON.stringify(response.data?.investor)],
        ]);
        api.defaults.headers['access-token'] = `${accessToken}`;
        api.defaults.headers.client = `${client}`;
        api.defaults.headers.uid = `${uid}`;
        setData({
          investor: response.data?.investor,
          access_token: JSON.stringify(accessToken),
          client: JSON.stringify(client),
          uid: JSON.stringify(uid),
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      '@ioasys:investor',
      '@ioasys:access_token',
      '@ioasys:client',
      '@ioasys:uid',
    ]);
    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user: data.investor,
        uid: data.uid,
        access_token: data.access_token,
        client: data.client,
        signIn,
        loading,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
export {AuthProvider, useAuth};
