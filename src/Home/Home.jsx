import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = (props) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Profile" onPress={() => props.navigation.push('SignUp')} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})