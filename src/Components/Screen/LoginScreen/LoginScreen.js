import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Input } from "react-native-elements/dist/input/Input";
import { auth } from "../../firebase/firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("BottomNavigator");
      }
    });
    return unsubscribe;
  }, []);
  const handleLogIn = () => {
    console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
      <Text
        style={{
          fontSize: 30,
          marginTop: 100,
          textAlign: "center",
        }}
      >
        Login Your Account
      </Text>

      <View style={styles.main}>
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
        />

        <Button
          onPress={handleLogIn}
          buttonStyle={{
            borderRadius: 5,
            backgroundColor: "salmon",
            width: "70%",
            marginLeft: 50,
          }}
          title="Login"
        />
      </View>

      <View>
        <Button
          onPress={() => navigation.navigate("RegisterScreen")}
          buttonStyle={{
            borderRadius: 5,
            backgroundColor: "violet",
            width: "70%",
            marginTop: 80,
            marginLeft: 50,
          }}
          title="Register"
        />
      </View>
    </ScrollView>
  );
};

const styles = {
  main: {
    top: 50,
  },
};

export default LoginScreen;
