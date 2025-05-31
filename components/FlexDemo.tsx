import React from "react";
import { StyleSheet, View } from "react-native";

function FlexDemo() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: "#FF6B6B" }]} />
      <View style={[styles.box, { backgroundColor: "#4ECDC4" }]} />
      <View style={[styles.box, { backgroundColor: "#1A535C" }]} />
      <View style={[styles.box, { backgroundColor: "#1A535C" }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7fff7",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  box: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
});

export default FlexDemo;
