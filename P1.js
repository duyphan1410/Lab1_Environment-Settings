/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

var MyStyle = StyleSheet.create(
  {
    ViewStyle:{
      width:100,
      height:100,
      backgroundColor:'aqua',
      alignItems: 'center',
      justifyContent: 'center'
    },
    TextStyle:{
      color:'black'
    }
  }
)

const App =() =>{
  return(
    <View style={MyStyle.ViewStyle}>
      <Text style={MyStyle.TextStyle}>Hello World</Text>
    </View>
  )}
export default App;
