import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Home from "../screens/Home";
import Level1 from "../screens/level1";
import Level2 from "../screens/level2";
import Level3 from "../screens/level3";
import Level4 from "../screens/level4";


const Stack = createStackNavigator();

export default class Stacknavigator extends Component{

render(){
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Level1" component={Level1}/>
    <Stack.Screen name="Level2" component={Level2}/>
    <Stack.Screen name="Level3" component={Level3}/>
    <Stack.Screen name="Level4" component={Level4}/>
    </Stack.Navigator>

    
  )
}
}