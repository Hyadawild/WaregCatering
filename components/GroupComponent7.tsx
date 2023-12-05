import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

type GroupComponent7Type = {
  dimensionCode?: ImageSourcePropType;
};

const GroupComponent7 = ({ dimensionCode }: GroupComponent7Type) => {
  return (
    <View style={[styles.vectorParent, styles.groupChildPosition]}>
      <Image
        style={[styles.groupChild, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={dimensionCode}
      />
      <Text style={styles.cariLauk}>Cari Lauk...</Text>
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 49,
    width: 316,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xl,
  },
  vectorIcon: {
    height: "42.86%",
    width: "6.99%",
    top: "28.57%",
    right: "87.34%",
    bottom: "28.57%",
    left: "5.66%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  cariLauk: {
    top: 11,
    left: 55,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.jostRegular,
    color: Color.colorLightgray_100,
    textAlign: "left",
    width: 94,
    position: "absolute",
  },
  groupItem: {
    top: 17,
    left: 21,
    width: 13,
    height: 12,
    position: "absolute",
  },
  vectorParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
  },
});

export default GroupComponent7;
