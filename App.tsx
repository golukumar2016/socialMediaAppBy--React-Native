import { View, Text, Button } from "react-native";
import React from "react";

import { SafeAreaProvider, useSafeAreaInsets, } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./app/Welcome";



export type RootStackParamList = {
  Welcome: undefined;
  Details : { ProductId : string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {

  return (
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome"
        screenOptions={{
          headerShown : false
        }}>
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
      </NavigationContainer>

      
  );
};

export default App;


    
  


