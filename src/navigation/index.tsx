import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomBarParamList, RootStackParamList} from './types';
import MCIIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppStack = createNativeStackNavigator<RootStackParamList>();
const BottomBar = createBottomTabNavigator<BottomBarParamList>();

function BottomBarTab() {
  return (
    <BottomBar.Navigator
      initialRouteName="bottom_bar_home"
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: '#0B0B0C',
        tabBarInactiveTintColor: '#DEC9AB',
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
          borderRadius: 30,
          backgroundColor: '#FAFAFA',
        },
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
      })}>
      <BottomBar.Screen
        name="bottom_bar_profile"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({focused, size, color}) => {
            return (
              <MCIIcon
                size={size}
                name={focused ? 'account' : 'account-outline'}
                color={color}
              />
            );
          },
        }}
      />
    </BottomBar.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <AppStack.Navigator
      initialRouteName="bottom_bar"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <AppStack.Screen name="bottom_bar" component={BottomBarTab} />
    </AppStack.Navigator>
  );
}
