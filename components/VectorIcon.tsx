import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const VectorIcon = () => {
  return (
    <Image
      style={styles.vectorIcon}
      contentFit="cover"
      source={require("../assets/vector.png")}
    />
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    top: 0,
    left: 228,
    width: 147,
    height: 100,
  },
});

export default VectorIcon;
