import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
 
import Home from "../../Screens/Home/Home" 
import SearchOrders from "../../Screens/SearchOrders/SearchOrders" 
import QRCodeButton from "../../Components/QRCodeButton/QRCodeButton" 
 
import { View } from 'native-base';

const Tab = createBottomTabNavigator();
const renderNull = () => {
  return null;
};

const TabsScreen = ({ status }) => (

  // <NavigationContainer>
  <Tab.Navigator

    tabBarOptions={
      {  keyboardHidesTabBar: false,
      
        activeTintColor: '#ffffff',
        inactiveTintColor: '#9e9e9e',
        activeBackgroundColor: "gray",
        inactiveBackgroundColor: "yellow",
        showLabel: true,
        style: {
          backgroundColor: "blue",   zIndex:110
        }
      }
    }
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        // title: 'My home',

        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name={'home'} color={color} size={28} />
        ),
      }}
    />
 

    <Tab.Screen
      name={'QRCodeButton'}
      component={QRCodeButton}
      options={{
        style: {

        },
        tabBarButton: () =>(<QRCodeButton />)
          // <QRCodeButton style={{ height: 50, width: 50, elevation: 5000 }} />
        // <AddButton  style={{height:280, width:280, elevation:5000}}/>  
      }}
    /> 
   
   
    <Tab.Screen
      name="SearchOrders"
      component={SearchOrders}
      options={{
        // tabBarVisible: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="account-circle" color={color} size={28} />
        ),
      }}
    />
  </Tab.Navigator>


);

export default TabsScreen;
  