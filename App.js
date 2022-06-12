import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Welcome from "./src/components/Welcome";
import GetStarted from "./src/components/GetStarted";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./src/components/Register";
import RegisterPage from "./src/components/RegisterPage";
import SignIn from "./src/components/SignIn";
import Contact from "./src/components/Contact";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: "" },
        }}
      >
        <Stack.Screen name="Welcome" children={Welcome} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;
