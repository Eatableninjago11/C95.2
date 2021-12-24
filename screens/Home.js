import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class Home extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.titleText}>Rock Song Finder</Text>
      <TouchableOpacity style={styles.botton}><Text style={styles.bottonText} 
      onPress={()=>{this.props.navigation.navigate("Level1")}}>Level 1</Text></TouchableOpacity>
      <TouchableOpacity style={styles.botton}><Text style={styles.bottonText}
      onPress={()=>{this.props.navigation.navigate("Level2")}}>Level 2</Text></TouchableOpacity>
      <TouchableOpacity style={styles.botton}><Text style={styles.bottonText}
      onPress={()=>{this.props.navigation.navigate("Level3")}}>Level 3</Text></TouchableOpacity>
      <TouchableOpacity style={styles.botton}><Text style={styles.bottonText}
      onPress={()=>{this.props.navigation.navigate("Level4")}}>Level 4</Text></TouchableOpacity>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botton:{
    backgroundColor:"lightblue",
    height:50,
    width:100,
    alignSelf:"center",
    marginTop:55,
    borderRadius:10,
  },
  bottonText:{
    alignSelf:"center",
    marginTop:13,
  },
  titleText:{
    alignSelf:"center",
    fontSize:30,
    fontWeight:"bolder",
  }
});