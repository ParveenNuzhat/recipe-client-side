import React from "react";
import {
  Button,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { auth } from "../../firebase/firebase";

const HomeScreen = ({ navigation }) => {
  const signOutHandle = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <ScrollView style={styles.main}>
      <View style={{ marginTop: 100, marginLeft: 60, marginBottom: 40 }}>
        <Text h1 style={{ fontSize: 20 }}>
          {" "}
          userEmail: {auth.currentUser.email}
        </Text>
      </View>
      <Button
        onPress={signOutHandle}
        buttonStyle={{ backgroundColor: "", width: "70%" }}
        title="Log out"
      />

      <View style={styles.container}>
        <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination
        >
          <View style={[styles.child, { backgroundColor: "pink" }]}>
            <Image
              style={{ width: 390, height: 340 }}
              source={require("../../../Images/2.jpg")}
            />
            <Text
              style={{
                // marginTop: 20,
                marginBottom: 100,
                fontSize: 25,
                marginLeft: 20,
              }}
            >
              Deliciousness jumping into the mouth
            </Text>
          </View>
          <View style={[styles.child, { backgroundColor: "thistle" }]}>
            <Image
              style={{ width: 390, height: 340 }}
              source={require("../../../Images/3.jpg")}
            />
            <Text style={{ marginBottom: 100, fontSize: 25, marginLeft: 20 }}>
              A balanced diet is a cookie in each hand
            </Text>
          </View>
          <View style={[styles.child, { backgroundColor: "skyblue" }]}>
            <Image
              style={{ width: 390, height: 340 }}
              source={require("../../../Images/4.jpg")}
            />
            <Text style={{ marginBottom: 100, fontSize: 25, marginLeft: 20 }}>
              People who love to eat are always the best people
            </Text>
          </View>
        </SwiperFlatList>
      </View>
    </ScrollView>
  );
};
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  main: {
    height: "50%",
    backgroundColor: "white",
  },
  container: { flex: 1, top: 10 },
  child: { width, justifyContent: "center" },
  text: { fontSize: width * 0.5, textAlign: "center" },
  // image: { width: "100%" },
});

export default HomeScreen;
