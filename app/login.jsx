import { StyleSheet, Text, View , StatusBar} from 'react-native'
import React from 'react'

import ScreenWrapper from '../components/ScreenWrapper.jsx'
import AppIcon from '../assets/icons/index.jsx'

import BackButton from "../components/BackButton.jsx"
import {hp, wp} from "../helpers/common.js"

const Login = () => {
  return (
    <ScreenWrapper >
      <StatusBar styles="dark" />
      <View style={styles.container}>
        <BackButton />
      </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({})