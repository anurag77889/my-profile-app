import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

function DetailsScreen({ route, navigation }: { route: any; navigation: any }) {
  const { user } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Details for ${user}`,
    });
  }, [navigation, user]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 Details Screen</Text>
      <Text>Welcome, {user}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 16 },
});

export default DetailsScreen;
