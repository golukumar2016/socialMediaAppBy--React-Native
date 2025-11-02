import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import SreenWrapper from '../components/SreenWrapper'

import { wp } from '../helpers/common'

// import {theme} from '../constants/theme'
const Welcome = () => {
  return (
    <SreenWrapper bg="white">
      <StatusBar barStyle="dark-content"/>
      <View style={styles.container}>
        <Image source={require('../assets/images/welcome.webp')} resizeMode="contain" />
      </View>
    </SreenWrapper>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor: "white",
    paddingHorizontal:wp(4)
  }
})
