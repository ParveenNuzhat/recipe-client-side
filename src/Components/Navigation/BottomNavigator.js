import React from "react";
import { Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";
import AddRecipe from "../Screen/AddRecipe/AddRecipe";
import Recipes from "../Screen/Recipes/Recipes";

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
      />

      <Tab.Screen
        name="Recipe"
        component={AddRecipe}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="food-bank" size={24} color="black" />
          ),
        }}
      />

      <Tab.Screen
        name="RecipeList"
        component={Recipes}
        options={{
          tabBarIcon: () => <Feather name="list" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
