import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import FlashScreen from "../Flash/FlashScreen";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";
import BottomNavigator from "./BottomNavigator";
import LoginScreen from "../Screen/LoginScreen/LoginScreen";
import RegisterScreen from "../Screen/RegisterScreen/RegisterScreen";
import Recipes from "../Screen/Recipes/Recipes";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome to Food Express"
          component={FlashScreen}
          options={{ headerMode: false }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerMode: false }}
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerMode: false }}
        />

        {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> */}

        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerMode: false }}
        />

        <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{ headerMode: false }}
        />

        <Stack.Screen
          name="Recipes"
          component={Recipes}
          options={{ headerMode: false }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default StackNavigator;
