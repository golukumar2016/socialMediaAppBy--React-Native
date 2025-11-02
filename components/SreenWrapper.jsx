import {View, Text} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";

const SreenWrapper = ({children, bg})=>{

  const {top} = useSafeAreaInsets();
  const paddingTop = top>0? top+5:30;

  return (
    <View style={{flex: 1, backgroundColor: bg ,paddingTop: paddingTop}}> 
    {
      children
    }
      
    </View>
  )
}

export default SreenWrapper;