import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import AppIcon from '../assets/icons'
import theme from '../constants/theme'

const BackButton = ({size=26, }) => {

  const navigation = useNavigation();

  const handlePress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <AppIcon name ="arrow-back-outline" type="ionicons" size={36} style={styles.button}/>
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({

  button:{
    alignSelf:"flex-start",
    padding : 5,
    borderRadius: theme.radius.sm,
    backgroundColor:"rgba(0,0,0,0.07)"
  }

})
