import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {ActivityIndicator, View} from 'react-native';

import {useAuth} from '../hooks/auth';
import Header from '../components/Header';

const Routes: React.FC = () => {
  const {user, loading} = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#666" />
      </View>
    );
  }
  return user ? (
    <>
      <Header />
      <AppRoutes />
    </>
  ) : (
    <AuthRoutes />
  );
};

export default Routes;
