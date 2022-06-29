import React from "react";
import { StyleSheet } from "react-native";
import { persistor, store } from "./src/store/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { LogBox } from "react-native";
import Router from "./src/router";

LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
]);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lavender",
  },
});

export default App;
