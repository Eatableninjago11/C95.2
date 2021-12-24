import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class Level2 extends Component{
    render(){
  return(<View>
  
  <View>
  <Text style={{textAlign:"center", fontWeight:"bold", fontSize:25}}>Level2</Text>
  </View>

   <View style={{marginTop:20, borderWidth:1, borderRadius:10, backgroundColor:"lightblue",}}>
    <Text>Otherside</Text>
    <Text >By "RedHotChillyPeppers"</Text>
    </View>

    <View style={{marginTop:20, borderWidth:1, borderRadius:10, backgroundColor:"lightblue",}}>
    <Text>Sound of silence</Text>
    <Text>By "Simon & Garfunkel"</Text>
    </View>
  
  </View>
  )
  }
}

//when I come around