import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Home from './Screens/Home/Home';
import Login from './Screens/Login/Login';
import ScanQR from './Screens/ScanQR/ScanQR';
import DrawerScreen from './Screens/Drawer/Drawer';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerScreen"
          component={DrawerScreen}
          options={{ headerShown: false}}
        />
          <Stack.Screen
          name="ScanQR"
          component={ScanQR}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
