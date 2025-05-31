import React from "react";
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ActionButton from "./ActionButton";

type Props = {
  avatarUrl: string;
  name: string;
  role: string;
  buttonLabel: string;
  buttonColor: string;
  onButtonPress: (event: GestureResponderEvent) => void;
  showButton?: boolean;
};

function ProfileHeader({
  avatarUrl,
  name,
  role,
  buttonLabel,
  onButtonPress,
  buttonColor,
  showButton,
}: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.roleRow}>
          <Text style={styles.role}>{role}</Text>

          {showButton !== false && (
            <ActionButton
              label={buttonLabel}
              color={buttonColor}
              onPress={onButtonPress}
            />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  roleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    marginTop: 4,
  },
  role: {
    fontSize: 14,
    color: "#666",
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
  },
});

export default ProfileHeader;
