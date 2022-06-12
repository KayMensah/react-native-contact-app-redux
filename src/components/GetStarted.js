import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import getstarted from "../../assets/img/getstarted.jpg";

const GetStarted = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={{ flexDirection: "row", flex: 60 }}>
          <Image source={getstarted} />
        </View>
        <View style={{ flex: 10, marginTop: 20 }}>
          <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
            KEEP IN TOUCH WITH FAMILY AND FRIENDS
          </Text>
          <Text>Sign in or register your email here</Text>
        </View>
        <View
          style={{
            flex: 15,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("RegisterPage")}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "red",
                marginRight: 100,
                marginBottom: 90,
              }}
            >
              <Text>REGISTER</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "red",
                marginBottom: 90,
              }}
            >
              <Text>SIGN IN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 16,
    backgroundColor: "lavender",
  },
});

export default GetStarted;
