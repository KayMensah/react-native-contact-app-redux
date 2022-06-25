import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  // SafeAreaView,
  // StatusBar,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import signin from "../../assets/img/signin.jpg";

const SignIn = () => {
  const [emailAddress, setEmailAddress] = useState(null);
  const [password, setPassword] = useState(null);

  const navigation = useNavigation();
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    //   <StatusBar StatusBar="dark-content" />
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={signin} style={{ marginBottom: 50 }} />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            autoCapitalize="none"
            value={emailAddress}
            onChangeText={(text) => setEmailAddress(text)}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            value={password}
            placeholder="Password"
            onChangeText={(password) => setPassword()}
            secureTextEntry={true}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "blue",
              borderRadius: 6,
              height: 40,
              width: 150,
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 30,
              marginHorizontal: 140,
              margin: 30,
            }}
            onPress={() => navigation.navigate("KayScan")}
          >
            <Text style={{ paddingLeft: 15 }}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={{ marginBottom: 120 }}>
            <Text
              style={{
                fontSize: 12,
                color: "blue",
                fontWeight: "bold",
              }}
            >
              Forgot? Reset Password!
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  input: {
    paddingHorizontal: 10,
    height: 40,
    margin: 12,
    // borderWidth: 1,
    width: 300,
    marginHorizontal: 60,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});

export default SignIn;
