import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from "../screens/Home";
import Search from "../screens/Search";
import Stacknavigator from "./stacknavigatior";

const Tab = createBottomTabNavigator();

export default class Tabnavigator extends Component{

  render(){
    return(
      <Tab.Navigator tabBarOptions={{activeTintColor:"red", inactiveTintColor:"black"}} 
      labeled={false}>
      
      <Tab.Screen name="Home" component={StackNavigator}/>
      <Tab.Screen name="Search" component={Search}/>
      </Tab.Navigator>
    )
  }
}