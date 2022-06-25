import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import korkorpix from "../../assets/img/korkorpix.jpg";

const KayScan = () => {
  const userInfo = {
    name: "Korkor Mensah",
    role: "Director",
    phone: "+23348558499",
    email: "kay@gmail.com",
    location: "Chicago",
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        <View style={{ marginTop: 40, flex: 20 }}>
          <Text
            style={{
              marginLeft: 30,
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Exchange Contact Information
          </Text>
          <Text style={{ marginLeft: 30, color: "grey", fontSize: 15 }}>
            Scan this QR below to share your contacts
          </Text>
        </View>
        <View style={{ marginTop: 10, flex: 40 }}>
          <QRCode value={JSON.stringify(userInfo)} size={200} />
        </View>
        <View
          style={{
            marginTop: 10,
            flex: 20,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 120,
          }}
        >
          <Image
            source={korkorpix}
            style={{
              height: 120,
              width: 120,
              borderRadius: "60%",
            }}
          />
          <View
            style={
              {
                //   fontWeight: "bold",
                //   fontSize: 4,
                //   color: "grey",
              }
            }
          >
            <Text style={{ fontWeight: "bold", color: "grey", marginLeft: 15 }}>
              Korkor Mensah
            </Text>
            <Text style={{ fontWeight: "bold", marginLeft: 15 }}>
              Executive Director
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginBottom: 20,
          }}
        >
          <View style={{ marginLeft: 80 }}>
            <Text>Want to add a new connection?</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("CameraScan")}
            style={{
              backgroundColor: "lightblue",
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "blue",
              borderRadius: 6,
              height: 40,
              width: 130,
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 30,
              marginHorizontal: 140,
              marginTop: 10,
              marginRight: 80,
            }}
          >
            <Text style={{ paddingLeft: 10 }}>Scan QR</Text>
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
    paddingHorizontal: 16,
    backgroundColor: "lavender",
  },
});

export default KayScan;
