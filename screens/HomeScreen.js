import React,{Component} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
// import {Header} from 'react-native-elements';
import { Header } from '@rneui/themed';
import * as Speech from 'expo-speech';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class HomeScreen extends Component{

constructor(){
super();
this.state = {text: ''};
}

speak = () => {
var thingToSay = this.state.text;
this.state.text === '' ? alert('Error⚠️: You have not entered a word.'): Speech.speak(thingToSay);
};


  render(){
  return (
    <SafeAreaProvider>
<View style={styles.container}>
<Header backgroundColor ={'#9DAEF5'} 
centerComponent = {{text:'Text To Speech Converter', style : {color:'#FFFDD0', fontSize:18, fontFamily:'times new roman'}}}/> 

<Image style ={{width :190,height:190,marginTop:100, margin:90, marginLeft:70}}source ={require ('../assets/mic.png')}/>

<View>
<Text style = {styles.text}>Enter The Word</Text>
 <TextInput style={styles.textBox} onChangeText={text => { this.setState({ text: text });}}/> </View>

<TouchableOpacity> 
<Text style= {styles.speechtext} onPress={this.speak}> Click Here To Hear Speech </Text>
</TouchableOpacity>

</View>
</SafeAreaProvider>
  )
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'white',
  },

textBox:{
  marginTop:30,
  width:'80%',
  alignSelf:'center',
  height:40,
  textAlign:'center',
  borderWidth:5,
  outline : 'none',
  },

  text:{
  height:10,
  alignSelf:'center',
  marginTop:-80,
  textAlign:'center',
  fontSize:28,
  fontWeight: 'bold',
  width:900,
  fontFamily:'quicksand'
  },

  speechtext:{
  alignSelf:'center',
  marginTop:100,
  textAlign:'center',
  fontSize:23,
  fontWeight: 'bold',
  width:200,
  fontFamily:'quicksand',
  borderWidth:3,
  borderRadius:50,
  backgroundColor:'#9DAEF5',
 color:'#FFFDD0'


  }
})