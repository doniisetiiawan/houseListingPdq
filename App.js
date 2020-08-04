import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import Detail from './Screens/Detail';
import Settings from './Screens/Settings';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = `${
                Platform.OS === 'ios' ? 'ios' : 'md'
              }-home`;
            } else if (route.name === 'Settings') {
              iconName = `${
                Platform.OS === 'ios' ? 'ios' : 'md'
              }-settings`;
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: '#556',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen
          name="Settings"
          component={Settings}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
