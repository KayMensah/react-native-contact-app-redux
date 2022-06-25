import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TextInput,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { registerUser } from "../store/Action";
import * as ImagePicker from "expo-image-picker";

const RegisterPage = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(password);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
        <View style={{ flex: 20 }}>
          {image ? (
            <View style={{ flexDirection: "row" }}>
              <Image
                source={{ uri: image }}
                style={{ width: 150, height: 150, marginTop: 20 }}
              />
              <View style={{ paddingTop: 20 }}>
                <TouchableOpacity onPress={pickImage}>
                  <Feather name="user-plus" size={30} color="black" />
                </TouchableOpacity>
                <Text>Change Photo</Text>
              </View>
            </View>
          ) : (
            <View style={{ paddingTop: 20 }}>
              <TouchableOpacity onPress={pickImage}>
                <Feather name="user-plus" size={30} color="black" />
              </TouchableOpacity>
              <Text>ADD PROFILE PHOTO</Text>
            </View>
          )}
        </View>
        <View style={{ marginTop: 10, flex: 50 }}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            autoCapitalize="none"
            autoCorrect={false}
            value={fullname}
            onChangeText={(text) => setFullName(text)}
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
            keyboardType="phone-pad"
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
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Repeat Password"
            value={repeatpassword}
            onChangeText={(text) => setRepeatPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <View style={{ flex: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "lightblue",
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
              margin: 70,
            }}
            onPress={() => registerUser(emailAddress, password)}
          >
            <Text style={{ paddingLeft: 10 }}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View tyle={{ flex: 10 }}>
            <Text
              style={{
                fontSize: 12,
                color: "blue",
                fontWeight: "bold",
                marginBottom: 15,
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
