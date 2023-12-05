import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent21 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.paketHematParent}>
        <Text
          style={[styles.paketHemat, styles.nasiAyamTypo]}
        >{`Paket Hemat     `}</Text>
        <Text style={[styles.nasiAyam, styles.nasiAyamTypo]}>
          Nasi + Ayam + Sayur
        </Text>
      </View>
      <Image
        style={styles.starIcon}
        contentFit="cover"
        source={require("../assets/star1.png")}
      />
      <View style={styles.vectorParent}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
        <Text style={[styles.rp14000, styles.minTypo]}>Rp. 14.000</Text>
        <Text style={[styles.min, styles.minTypo]}>10 Min</Text>
      </View>
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.text, styles.textLayout]}>-</Text>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.text1, styles.textLayout]}>1</Text>
        <Text style={[styles.text2, styles.textLayout]}>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nasiAyamTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    left: 0,
    position: "absolute",
  },
  minTypo: {
    fontFamily: FontFamily.beVietnam,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    color: Color.colorWhite,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 28,
    position: "absolute",
  },
  textLayout: {
    width: 9,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  paketHemat: {
    fontSize: FontSize.size_xl,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: {
      width: 3,
      height: 3,
    },
    textShadowRadius: 4,
    top: 0,
  },
  nasiAyam: {
    top: 29,
    fontSize: FontSize.size_base,
  },
  paketHematParent: {
    width: 164,
    height: 57,
    left: 0,
    top: 0,
    position: "absolute",
  },
  starIcon: {
    height: "11.58%",
    width: "24.21%",
    top: "63.16%",
    right: "75.79%",
    bottom: "25.26%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  groupChild: {
    top: 4,
    left: 59,
    width: 1,
    height: 10,
    position: "absolute",
  },
  rp14000: {
    left: 0,
  },
  min: {
    left: 65,
  },
  vectorParent: {
    top: 79,
    width: 99,
    height: 16,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorLimegreen_100,
    width: 75,
    height: 28,
    left: 0,
    top: 0,
  },
  text: {
    left: 8,
    height: 19,
    fontFamily: FontFamily.biryaniRegular,
    fontSize: FontSize.size_lg,
    width: 9,
    top: 0,
  },
  groupInner: {
    left: 50,
    borderTopRightRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
    backgroundColor: Color.colorDarkslategray,
    width: 25,
    top: 0,
  },
  text1: {
    top: 6,
    left: 32,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.lexendDecaRegular,
    height: 1,
  },
  text2: {
    left: 56,
    height: 20,
    fontFamily: FontFamily.biryaniRegular,
    fontSize: FontSize.size_lg,
    width: 9,
    top: 0,
  },
  rectangleParent: {
    top: 52,
    left: 210,
    width: 75,
    height: 28,
  },
  groupParent: {
    top: 533,
    left: 53,
    width: 285,
    height: 95,
    position: "absolute",
  },
});

export default GroupComponent21;
