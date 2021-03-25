import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import AntIcon from 'react-native-vector-icons/AntDesign';

import Account from '../pages/Account';
import Favourites from '../pages/Favourites';
import EnterpriseList from '../pages/EnterpriseList';
import Enterprise from '../pages/Enterprise';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackScreen: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={EnterpriseList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Enterprise"
        component={Enterprise}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
        },
        inactiveTintColor: '#333',
        activeTintColor: '#dc1637',
      }}>
      <Tab.Screen
        name="EnterpriseList"
        component={StackScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return <AntIcon name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favourites}
        options={{
          tabBarIcon: ({color, size}) => {
            return <AntIcon name="hearto" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({color, size}) => {
            return <AntIcon name="user" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
