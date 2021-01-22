import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Home from './containers/Home';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Message from './containers/Message';
import Profile from './containers/Profile';
import { IconButton } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

// const myOption = {
//   headerStyle: {
//     backgroundColor: '#84e514',
//     // fontFamily: 'fira-code',
//   },
// };

function App() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: { fontSize: 12 },
          style: {
            backgroundColor: 'powderblue',
            // height: 75,
            // alignItems: 'center',
          },
          showIcon: true,
          showLabel: false,
        }}>
        <Tab.Screen
          name='Home'
          component={Home}
          showIcon={true}
          // tabBarOptions={{
          //   showIcon: true,
          // }}
          options={{
            // tabBarLabel: 'Home Page',
            tabBarIcon: ({ focused, tintColor }) => (
              <Icon name='fire' size={20} color='red' />
            ),
          }}
        />
        <Tab.Screen
          name='Message'
          component={Message}
          options={{
            // tabBarLabel: 'Home Page',
            tabBarIcon: ({ focused, tintColor }) => (
              <Icon name='comments' size={20} color='#19bd13' />
            ),
          }}
        />
        <Tab.Screen
          name='Profile'
          component={Profile}
          options={{
            // tabBarLabel: 'Home Page',
            tabBarIcon: ({ focused, tintColor }) => (
              <Icon name='user' size={20} color='#2099f2' />
            ),
          }}
        />
      </Tab.Navigator>
      {/* <Home /> */}
      {/* <Tab.Navigator
        initialRouteName='Home'
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: 'powderblue' },
        }}>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            ...myOption,
          }}
        />
        <Tab.Screen name='Message' component={Message} />
      </Tab.Navigator> */}
    </View>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6f7',
    marginTop: Constants.statusBarHeight,
    // alignItems: 'center',

    // justifyContent: 'center',
  },
});
