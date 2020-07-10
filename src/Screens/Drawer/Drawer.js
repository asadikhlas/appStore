import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import Home from "../Home/Home"
import BottomTab from "../../Components/BottomTab/BottomTab"
 
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
 

const Drawer = createDrawerNavigator();
const WIDTH = Dimensions.get('window').width;
 
 
const DrawerScreen = props => (
  <Drawer.Navigator
    initialRouteName="TabsScreen"
 
    drawerPosition="left"
    // drawerType={'back'},slide, permanent, front
    drawerContentOptions={{
      activeTintColor: "blue",
      inactiveTintColor: "gray",
      activeBackgroundColor: 'white',
      inactiveBackgroundColor: 'white',
      itemStyle: { marginTop: -1 },
      labelStyle: { fontSize: 16, marginLeft: -10 },
      drawerWidth: WIDTH * 0.8,
    }}>
    <Drawer.Screen
      name="BottomTab"
      component={BottomTab}
      options={{
        drawerIcon: ({}) => (
          <SimpleLineIcons
            name={'home'}
            size={24}
            color={"red"}
            style={{ marginLeft: 14 }}
          />
        ),
      }}
    />

  
  </Drawer.Navigator>
);

export default DrawerScreen;