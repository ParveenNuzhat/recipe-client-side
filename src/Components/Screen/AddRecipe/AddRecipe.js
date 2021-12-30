import React, { useState } from "react";
import { Input } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Image, ScrollView } from "react-native";
import { TextInput, SafeAreaView, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const AddRecipe = ({ navigation }) => {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = () => {
    const newRecipe = {
      recipeName: recipeName,
      description: description,
      img: img,
    };
    console.log(newRecipe);
    fetch("https://enigmatic-earth-14848.herokuapp.com/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added the recipe");
          navigation.navigate("Recipes");
        }
      });
  };
  return (
    <SafeAreaView style={{ backgroundColor: "skyblue", height: "100%" }}>
      <ScrollView>
        <Text
          h1
          style={{
            marginTop: 60,
            fontSize: 30,
            marginLeft: 12,
            backgroundColor: "skyblue",
            color: "white",
          }}
        >
          Add New Recipe
        </Text>
        <TextInput
          style={styles.input}
          value={recipeName}
          onChangeText={(text) => setRecipeName(text)}
          placeholder="Recipe"
        />
        <TextInput
          style={styles.input1}
          value={description}
          onChangeText={(text) => setDescription(text)}
          placeholder="Description"
        />

        <TextInput
          style={styles.input1}
          value={img}
          onChangeText={(text) => setImg(text)}
          placeholder="ImageURL"
        />

        {/* <Image
          source={{
            uri: "https://i.ibb.co/7NLqjp3/23b004d8-5131-42b9-a4be-99e0884e0230.jpg",
          }}
          style={{ width: 400, height: 400 }}
        /> */}

        <Button
          onPress={handleSubmit}
          buttonStyle={{
            backgroundColor: "purple",
            borderRadius: 10,
            width: "30%",
            marginLeft: 100,
          }}
          title="Add Recipe"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 70,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AddRecipe;
