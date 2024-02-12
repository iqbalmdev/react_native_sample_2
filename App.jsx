/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, Button,StyleSheet, Linking } from 'react-native';

const App = (props) => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Welcome to My App to see the magic</Text>
    <Button title='hello man' onPress={()=>{Linking.openURL("www.youtube.com")}}/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'#0000ff',
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
    color:'#ffff'
  }
})
