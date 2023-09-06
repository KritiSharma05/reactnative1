import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DiceOne from '../assests/one.png'
import DiceTwo from '../assests/two.png'
import DiceThree from '../assests/three.png'
import DiceFour from '../assests/four.png'
import DiceFive from '../assests/five.png'
import DiceSix from '../assests/six.png'
import type { PropsWithChildren } from 'react'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

type DiceProps =PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
const Dice=({imageUrl}:DiceProps) =>{
  return(
    <Image style={styles.imagestore} source ={imageUrl}/>
  )
}

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};


const App = () =>
 {
  const [diceImage,setDiceImage]=useState<ImageSourcePropType>(DiceOne)

  const RollDiceOnTap=()=>{
    let rNum = Math.floor(Math.random() *6)+1;
    switch (rNum) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
          setDiceImage(DiceTwo)
          break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;  
    
      default:
        setDiceImage(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactHeavy", options);
  }

  return (
    <View style={styles.Container}>
      <Dice imageUrl={diceImage}/>
      <Pressable onPress={RollDiceOnTap} >
        <Text style={styles.roll}>
        Roll The Dice </Text>
      </Pressable>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  imagestore:{
    width:200,
    height:200,
    
  },
  Container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  },
  roll:{
   
    paddingVertical:20,
    paddingHorizontal:60,
    borderWidth:2,
    borderRadius:10
  },
})