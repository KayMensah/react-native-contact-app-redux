import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

import letterk from "../../assets/img/letterk.png";

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View
          style={{
            flex: 20,

            flexDirection: "row",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <View>
            <Image
              source={letterk}
              style={{
                width: 60,
                height: 80,
                resizeMode: "contain",
                //   marginRight: 25,
                //   marginBottom: 5,
              }}
            />
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>KAY MENS</Text>
          </View>
        </View>
        <View style={{ flex: 60 }}>
          <View style={{ marginVertical: 140 }}>
            <Text style={styles.text}> KAY MENS </Text>
            <Text style={styles.text}> CONTACTS</Text>
          </View>
        </View>
        <View style={{ flex: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate("GetStarted")}>
            <View style={{ borderBottomWidth: 1, borderBottomColor: "red" }}>
              <Text style={{ fontSize: 15 }}> GET STARTED</Text>
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
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default Welcome;
