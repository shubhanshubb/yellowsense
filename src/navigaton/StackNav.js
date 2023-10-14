import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screen/Home';
import Dashboard from '../screen/Dashboard';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Dashboard' component={Dashboard} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNav