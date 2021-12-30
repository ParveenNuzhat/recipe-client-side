import React, { useState } from "react";
import { View, TextInput, Text, Image, StyleSheet } from "react-native";
import { Input, Icon } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../firebase/firebase";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandle = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        console.log(user.password);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <Text style={{ fontSize: 30, marginTop: 100, textAlign: "center" }}>
        Create New Account
      </Text>

      <View style={styles.container}>
        <Input
          placeholder="Enter your email"
          leftIcon={{ type: "ant-design", name: "mail" }}
          onChangeText={(value) => this.setState({ comment: value })}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="Enter your password"
          leftIcon={{ type: "ant-design", name: "lock" }}
          onChangeText={(value) => this.setState({ comment: value })}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />

        <Button
          onPress={() => registerHandle()}
          buttonStyle={{
            backgroundColor: "violet",
            borderRadius: 10,
            width: "70%",
            marginLeft: 50,
          }}
          title="Register"
        />
        <TouchableOpacity onPress={navigation.navigate("RegisterScreen")}>
          <Button
            buttonStyle={{
              backgroundColor: "salmon",
              borderRadius: 10,
              width: "70%",
              marginLeft: 50,
              marginTop: 20,
            }}
            title="Login"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default RegisterScreen;
