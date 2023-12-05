import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IndomieGorengCard = () => {
  return (
    <View
      style={[styles.joshuaRyderI51a7yy7mqaUnsplParent, styles.joshuaLayout]}
    >
      <Image
        style={[styles.joshuaRyderI51a7yy7mqaUnsplIcon, styles.joshuaLayout]}
        contentFit="cover"
        source={require("../assets/joshuaryderi51a7yy7mqaunsplash-1.png")}
      />
      <View style={[styles.indomieGorengParent, styles.parentPosition]}>
        <Text style={[styles.indomieGoreng, styles.specialTypo]}>
          Indomie Goreng
        </Text>
        <Text style={[styles.special, styles.specialTypo]}>Special</Text>
      </View>
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/group-55.png")}
      />
      <Image
        style={styles.starIcon}
        contentFit="cover"
        source={require("../assets/star.png")}
      />
      <View style={[styles.vectorParent, styles.parentPosition]}>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
        <Text style={[styles.rp10000, styles.minTypo]}>Rp. 10.000</Text>
        <Text style={[styles.min, styles.minTypo]}>40 Min</Text>
      </View>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupInner, styles.rectangleLayout]} />
        <Text style={[styles.text, styles.textLayout]}>-</Text>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Text style={[styles.text1, styles.textLayout]}>5</Text>
        <Text style={[styles.text2, styles.textLayout]}>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  joshuaLayout: {
    height: 387,
    width: 300,
    position: "absolute",
  },
  parentPosition: {
    left: 29,
    position: "absolute",
  },
  specialTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
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
  rectangleLayout: {
    height: 28,
    position: "absolute",
  },
  textLayout: {
    width: 9,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  joshuaRyderI51a7yy7mqaUnsplIcon: {
    borderRadius: Border.br_6xl,
    left: 0,
    top: 0,
  },
  indomieGoreng: {
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: {
      width: 3,
      height: 3,
    },
    textShadowRadius: 4,
    top: 0,
  },
  special: {
    top: 24,
  },
  indomieGorengParent: {
    top: 270,
    width: 167,
    height: 59,
  },
  groupChild: {
    top: 17,
    left: 238,
    width: 41,
    height: 40,
    position: "absolute",
  },
  starIcon: {
    height: "2.84%",
    width: "23%",
    top: "272.35%",
    right: "54.67%",
    bottom: "-175.19%",
    left: "22.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  groupItem: {
    top: 5,
    left: 60,
    width: 0,
    height: 9,
    position: "absolute",
  },
  rp10000: {
    left: 0,
  },
  min: {
    left: 65,
  },
  vectorParent: {
    top: 349,
    width: 100,
    height: 16,
  },
  groupInner: {
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
  rectangleView: {
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
    top: 327,
    left: 204,
    width: 75,
    height: 28,
  },
  joshuaRyderI51a7yy7mqaUnsplParent: {
    top: 724,
    left: 38,
  },
});

export default IndomieGorengCard;
