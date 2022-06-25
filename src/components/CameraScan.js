import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import MemberProfile from "./MemberProfile";

const CameraScan = () => {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate("MemberProfile", {
      details: JSON.parse(data),
    });
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={{ flex: 90 }}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && (
            <Button
              title={"Tap to Scan Again"}
              onPress={() => setScanned(false)}
            />
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginBottom: 20,
          }}
        >
          <View style={{ marginLeft: 10, flex: 10 }}>
            <Text>Want to share your contact?</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            //I can put navigatiomn.pop() in place of navigation.goBack() too
            style={{
              backgroundColor: "lightblue",
              borderRadius: 5,
              height: 40,
              width: 130,
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 30,
              marginHorizontal: 140,
              marginTop: 10,
              marginRight: 10,
            }}
          >
            <Text style={{ paddingLeft: 10 }}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // paddingHorizontal: 16,
    backgroundColor: "lavender",
  },
});

export default CameraScan;
