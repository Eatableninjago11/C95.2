import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class Level3 extends Component{
    render(){
  return(<View>
  
     <View>
  <Text style={{textAlign:"center", fontWeight:"bold", fontSize:25}}>Level3</Text>
  </View>
   <View style={{marginTop:20, borderWidth:1, borderRadius:10, backgroundColor:"lightblue",}}>
    <Text>When you were young</Text>
    <Text >By "The Killers"</Text>
    </View>

    <View style={{marginTop:20, borderWidth:1, borderRadius:10, backgroundColor:"lightblue",}}>
    <Text>What its like</Text>
    <Text>By "Everlast"</Text>
    </View>
  
  
  
  
  </View>
  )
  }
}

//iron man