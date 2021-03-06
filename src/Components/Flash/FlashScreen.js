import { useNavigation } from "@react-navigation/native";
import React, { useRef, useEffect } from "react";
import { Animated, Button, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const FadeInView = (props) => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("LoginScreen");
    }, 5000);
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FadeInView
        style={{ width: "100%", height: "100%", backgroundColor: "powderblue" }}
      >
        <ImageBackground
          style={{ flex: 1, resizeMode: "cover" }}
          source={require("../../Images/1.jpg")}
        >
          <Text
            style={{
              fontSize: 45,
              fontWeight: "bold",
              color: "white",
              marginTop: 280,
              marginLeft: 20,
            }}
          >
            The Finest Flavours
          </Text>
          <Text
            style={{
              fontSize: 45,
              fontWeight: "bold",
              color: "white",
              marginLeft: 20,
            }}
          >
            Explored
          </Text>
        </ImageBackground>
        <Button
          buttonStyle={{ fontsize: 30 }}
          onPress={() => navigation.navigate("BottomNavigator")}
          title="NEXT"
          icon={
            <Entypo
              style={{ marginRight: 9 }}
              name="forward"
              size={25}
              color="white"
            />
          }
        />
      </FadeInView>
    </View>
  );
};
