import { StyleSheet, Text, View, Image, StatusBar, Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



import SreenWrapper from '../components/SreenWrapper'

import { wp , hp} from '../helpers/common'
import { theme } from '../constants/theme'
import  Button  from '../components/Button.jsx'



const Welcome = () => {

  const navigation = useNavigation();

  return (
    <SreenWrapper bg="white">
      <StatusBar barStyle="dark-content"/>
      <View style={styles.container}>
        <Image style={styles.welcomeImage} source={require('../assets/images/welcome.webp')} resizeMode="contain" />

        <View style={{gap: 20}}>
          <Text style={styles.title}>LinkUp!</Text>
          <Text style={styles.punchline}>Where every thought finds a home and every images tells a story.</Text>
        </View>
        <View style={styles.footer}>
          <Button
            title="Getting Started"
            buttonStyle={{marginBottom: wp(10)}}
            onPress={()=>{navigation.navigate('SignUp')}}

          />
        </View>

      <View style={styles.bottomTextContainer}>
        <Text>
          Alerady have an account !
        </Text>
        <Pressable onPress={()=>navigation.navigate('Login')}>
          <Text style={[styles.loginText, {color:theme.colors.primaryDark, fontWeight:theme.fonsts.semibold}]}>
            Login
          </Text>
        </Pressable>
      </View>
      </View>
    </SreenWrapper>
  )
}

export default Welcome;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor: "white",
    paddingHorizontal:wp(4)
  },
  welcomeImage:{
    height:hp(30),
    width: wp(100),
    alignSelf:"center",
  },
  title:{
    color:theme.colors.text,
    fontSize: hp(4),
    textAlign:"center",
    fontWeight: theme.fonsts.extraBold,
  },
  punchline:{
    textAlign:"center",
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.text,
  },
  footer:{
    gap:30,
    width:"100%"
  },
  bottomTextContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignContent:"center",
    gap: 5
  },
  loginText:{
    textAlign:"center",
    color: theme.colors.text,
    fontSize: hp(1.6)
  }
})
