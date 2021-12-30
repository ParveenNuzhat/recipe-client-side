import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import FlashScreen from "./src/Components/Flash/FlashScreen";
import StackNavigator from "./src/Components/Navigation/StackNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StackNavigator></StackNavigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
