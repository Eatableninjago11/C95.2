import React, {Component} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import Constants from 'expo-constants';
import db from '../config';

export default class Search extends Component{
  constructor(){
  super();
  this.state={
    searchInput:"",
    searchArtist:"",
    searchSong:"",
    searchLevel:"",

}

}

  searchSong = async () =>{
    var text = this.state.searchInput.toUpperCase();
    var searchText = text.split("");
    const query = await db.collection("songs").where("name","==",text).get()
    query.docs.map((doc)=>{
      var data = doc.data()
      data?(
      this.setState({searchArtist:data.artist, searchSong:data.name, searchLevel:data.level}))
      :
      alert("sorry, we couldn't find the song")
    })
    
  }

  searchBand = async () =>{
    var text = this.state.searchInput.toUpperCase();
    var searchText = text.split("");
    const query = await db.collection("songs").where("artist","==",text).get()
    query.docs.map((doc)=>{
      var data = doc.data()
      data?(
      this.setState({searchArtist:data.artist, searchSong:data.name, searchLevel:data.level}))
      :
      alert("sorry, we couldn't find the song")
    })
    
  }



  render(){

    
    console.log(this.state.searchSong)
    
    return(
      <View>
      <View><Text style={{  
    alignSelf:"center",
    fontSize:30,
    fontWeight:"bolder",}}>Rock Song Finder</Text></View>
      
      <View style={{flexDirection:"row",flex:1}}>
     
     
      <TextInput 
      placeholder="Song name" 
      placeholderTextColor="gray" 
      style={{
        backgroundColor:"lightblue",width:300,height:35,borderRadius:20, alignSelf:"center", marginTop:30,alignContent:"center",borderWidth:1}} 
      onChangeText={(text)=>{this.setState({searchInput:text})}} />
                  </View>
              </View>
          )
      }
    }
    const style = StyleSheet.create({
        displayText:{
            marginTop:55,
            borderWidth:0.6,
            backgroundColor:"light blue",
            borderRadius:30,
            
        },
        text:{
            marginLeft:17,
            fontSize:18,
            
        }
    })
    