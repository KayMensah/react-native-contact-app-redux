import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";

const MemberProfile = ({ route }) => {
  const { details } = route.params;
  // console.log(details);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>
            {details.name}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>
            {details.role}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>
            {details.phone}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>
            {details.email}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>
            {details.location}
          </Text>
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

export default MemberProfile;
