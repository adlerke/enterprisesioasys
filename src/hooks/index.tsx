import React from 'react';
import {AuthProvider} from './auth';
import {FavProvider} from './favourites';

const AppProvider: React.FC = ({children}) => (
  <AuthProvider>
    <FavProvider>{children}</FavProvider>
  </AuthProvider>
);

export default AppProvider;
