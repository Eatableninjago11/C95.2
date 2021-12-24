import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class Level1 extends Component{
  render(){
  return(
    <View>
  <View>
  <Text style={{textAlign:"center", fontWeight:"bold", fontSize:25}}>Level1</Text>
  </View>
    
    <View style={{marginTop:20, borderWidth:1, borderRadius:10, backgroundColor:"lightblue",}}>
    <Text>7</Text>
    <Text >By "catfish and the bottlemen"</Text>
    </View>

    <View style={{marginTop:20, borderWidth:1, borderRadius:10, backgroundColor:"lightblue",}}>
    <Text>masterpeace</Text>
    <Text>By "Big Thief"</Text>
    </View>
    </View>
  )
  }

}
