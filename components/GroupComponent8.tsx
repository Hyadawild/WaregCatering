import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const GroupComponent8 = () => {
  return (
    <View style={styles.vectorParent}>
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
      <Text style={[styles.urutBerdasarkan, styles.cariLaukFlexBox]}>
        Urut Berdasarkan
      </Text>
      <View style={[styles.vectorGroup, styles.groupPosition]}>
        <Image
          style={[styles.groupItem, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector16.png")}
        />
        <Text style={[styles.cariLauk, styles.cariLaukFlexBox]}>
          Cari Lauk...
        </Text>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cariLaukFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupPosition: {
    height: 49,
    left: 0,
    top: 0,
    width: 316,
    position: "absolute",
  },
  groupChild: {
    top: 130,
    left: 303,
    width: 14,
    height: 8,
    position: "absolute",
  },
  urutBerdasarkan: {
    top: 124,
    left: 207,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.beVietnam,
    color: Color.colorDarkgray_200,
  },
  groupItem: {
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
    width: 94,
  },
  groupInner: {
    top: 17,
    left: 21,
    width: 13,
    height: 12,
    position: "absolute",
  },
  vectorGroup: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
  },
  vectorParent: {
    top: 131,
    left: 32,
    height: 140,
    width: 316,
    position: "absolute",
  },
});

export default GroupComponent8;
