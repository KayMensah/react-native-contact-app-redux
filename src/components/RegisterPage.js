import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterPage = () => {
  const [fullname, setFullName] = useState(null);
  const [emailAddress, setEmailAddress] = useState(null);
  const [phonenumber, setPhoneNumber] = useState(null);
  const [role, setRole] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatpassword, setRepeatPassword] = useState("");

  console.log(emailAddress);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar StatusBar="dark-content" />

      <View style={styles.container}>
        <View>
          <Text>PROFILE CAMERA IMAGE HERE</Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            autoCapitalize="none"
            autoCorrect={false}
            value={fullname}
            onChangeText={(text) => setFullName(text)}
            keyboardType="text"
          />
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
            placeholder="Phone Number"
            keyboardType="numeric"
            autoCapitalize="none"
            value={phonenumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Role"
            autoCapitalize="none"
            value={role}
            onChangeText={(text) => setRole(text)}
          />
          <TextInput
            style={styles.input}
            value={twitter}
            autoCapitalize="none"
            placeholder="Twitter"
            onChangeText={(text) => setTwitter()}
          />
          <TextInput
            style={styles.input}
            value={password}
            placeholder="Password"
            onChangeText={(password) => setPassword()}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Repeat Password"
            value={repeatpassword}
            onChangeText={(password) => setRepeatPassword()}
            secureTextEntry={true}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "lightblue",
              //   borderWidth: 2,
              borderRadius: 5,
              height: 40,
              width: 150,
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 30,
              marginHorizontal: 140,
              margin: 70,
            }}
            OnPress={() => navigation.navigate("SignIn")}
          >
            <Text style={{ paddingLeft: 10 }}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: 12,
                color: "blue",
                fontWeight: "bold",
              }}
            >
              You already have an account? Login !
            </Text>
          </View>
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

export default RegisterPage;
