import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-material-cards";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Button } from "react-native-elements/dist/buttons/Button";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native-elements";

const Recipes = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://enigmatic-earth-14848.herokuapp.com/recipes"
      );
      const recipes = await response.json();
      setRecipes(recipes);
    };
    fetchData();
  }, []);

  //DELETE

  const DeleteRecipe = (id) => {
    const url = `https://enigmatic-earth-14848.herokuapp.com/recipeCollection/${id}`;
    console.log(url);
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("deleted successfully");
          const remaining = recipes.filter((recipe) => recipe._id !== id);
          setRecipes(remaining);
        }
      });
  };

  const renderRecipe = ({ item, index }) => {
    const { _id, img } = item;
    return (
      <View>
        <Card style={{ backgroundColor: "skyblue" }}>
          <View>
            <Text style={{ fontSize: 15 }}>
              {" "}
              <Text
                style={{ fontSize: 20, color: "magenta", fontWeight: "bold" }}
              >
                Recipe:
              </Text>{" "}
              {item.title}
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: 15 }}>
              {" "}
              <Text
                style={{ fontSize: 20, color: "magenta", fontWeight: "bold" }}
              >
                Description:{" "}
              </Text>
              {item.description}
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: 15 }}>
              {" "}
              <Text style={{ fontSize: 20, color: "purple" }}></Text>
            </Text>
          </View>

          <View>
            <Image
              source={{
                uri: img,
              }}
              style={{ width: 400, height: 400 }}
            />
          </View>

          <CardAction>
            <CardButton
              onPress={() => DeleteRecipe(_id)}
              title="DELETE"
              color="blue"
            />
          </CardAction>
        </Card>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ backgroundColor: "gray", height: "100%" }}>
          <View style={{ marginTop: 50 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("BottomNavigator")}
            >
              <Button
                buttonStyle={{
                  backgroundColor: "violet",
                  width: "60%",
                  marginLeft: "15%",
                }}
                title="Back To Previous Page"
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              h1
              style={{
                marginTop: 50,
                fontSize: 25,
                padding: 10,
                textAlign: "center",
                backgroundColor: "indigo",
                color: "white",
              }}
            >
              Delicious yet Healthy Recipe{" "}
            </Text>
            <FlatList
              style={{ marginTop: 50, marginBottom: 10 }}
              data={recipes}
              renderItem={renderRecipe}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recipes;
