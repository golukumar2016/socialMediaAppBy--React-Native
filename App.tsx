import { View, Text, Button } from "react-native";
import React from "react";

import { SafeAreaProvider, useSafeAreaInsets, } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./app/Welcome";
import SignUp from "./app/SignUp";
import Login from "./app/login.jsx"




export type RootStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {

  return (
    // <View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome"
        screenOptions={{
          headerShown : false
        }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />

          

        </Stack.Navigator>
      </NavigationContainer>

        // {/* <View>
        //   <Text>golu kumar</Text>
        // </View> */}
      // </View>

  );
};

export default App;


    
  


