import React, { Component } from 'react'
import {Text} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import ItemListScreen from '../Containers/ItemListScreen'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'


import styles from './Styles/NavigationStyles'
import { from } from 'rxjs';
import VegiList from '../Containers/HomeScreen';
 
// Manifest of possible screens
const PrimaryNav = createStackNavigator({
 ListScreen:{screen:ItemListScreen},
  HomeScreen: { screen: HomeScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header,
    headerTitle: "My App",
    headerRight: (
      <Text style={{fontSize:24}}>Karunkys</Text>
    ),
  }, 
})

export default createAppContainer(PrimaryNav)
