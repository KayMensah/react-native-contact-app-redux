import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./components/Register";
import RegisterPage from "./components/RegisterPage";
import SignIn from "./components/SignIn";
import Contact from "./components/Contact";
import KayScan from "./components/KayScan";
import MemberProfile from "./components/MemberProfile";
import MyProfile from "./components/MyProfile";
import Welcome from "./components/Welcome";
import GetStarted from "./components/GetStarted";
import CameraScan from "./components/CameraScan";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase/Config";
import { setAuthenticated, setUser } from "./store/Action";
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

export default function Router() {
  const { user, authenticated } = useSelector(({ user, authenticated }) => ({
    user,
    authenticated,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
        dispatch(setAuthenticated(true));
      } else {
        dispatch(setUser(null));
        dispatch(setAuthenticated(false));
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: "" },
        }}
      >
        {user && authenticated ? (
          <>
            <Stack.Screen
              name="KayScan"
              component={KayScan}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("MyProfile")}
                  >
                    <Feather name="user-plus" size={30} color="black" />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen name="MemberProfile" component={MemberProfile} />
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen
              name="CameraScan"
              component={CameraScan}
              options={{}}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" children={Welcome} />
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              // options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="RegisterPage" component={RegisterPage} />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              // options={{ headerShown: false }}
            />
            <Stack.Screen name="Contact" component={Contact} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
