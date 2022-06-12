import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar StatusBar="dark-content" />
      <View>
        <TouchableOpacity OnPress={() => navigation.navigate("Login")}>
          <Text>SIGN IN</Text>
        </TouchableOpacity>
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

export default SignIn;
