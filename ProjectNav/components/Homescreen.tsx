import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Homescreen = ({navigation}) => {
  return (
    <View>
      <Text>Homescreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({})