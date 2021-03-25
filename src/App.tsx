import React from 'react';
import {Text, View, StatusBar} from 'react-native';
import Routes from './routes';

import {NavigationContainer} from '@react-navigation/native';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#f1f2f3" />
      <AppProvider>
        <View style={{flex: 1}}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
