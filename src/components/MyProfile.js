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
import korkorpix from "../../assets/img/korkorpix.jpg";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const MyProfile = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={{ marginBottom: 250 }}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={korkorpix}
              style={{
                width: 120,
                height: 120,
                borderRadius: 100,
              }}
            />
            <View style={{ marginTop: 40 }}>
              <Text
                style={{
                  marginLeft: 15,
                  fontWeight: "bold",
                  color: "grey",
                  fontSize: 17,
                }}
              >
                Korkor Mensah
              </Text>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: "bold",
                  fontSize: 17,
                  //   color: "lightgrey",
                }}
              >
                Executive Director
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginVertical: 20,
            }}
          >
            <View style={{ marginRight: 20 }}>
              <TouchableOpacity>
                <Entypo name="twitter-with-circle" size={25} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Entypo name="linkedin-with-circle" size={25} color="black" />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", marginVertical: 20 }}>
            <SimpleLineIcons name="phone" size={24} color="black" />
            <Text style={{ marginLeft: 15, fontWeight: "bold", color: "grey" }}>
              +233 (234) 555 794
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginVertical: 20 }}>
            <Fontisto name="email" size={24} color="black" />
            <Text style={{ marginLeft: 15, fontWeight: "bold", color: "grey" }}>
              kay@gmail.com
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginVertical: 20 }}>
            <SimpleLineIcons name="location-pin" size={24} color="black" />
            <Text style={{ marginLeft: 15, fontWeight: "bold", color: "grey" }}>
              chicago, USA
            </Text>
          </View>
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
    paddingHorizontal: 16,
    backgroundColor: "lavender",
  },
});

export default MyProfile;
