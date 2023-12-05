import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

type GroupComponent11Type = {
  dimensionCode?: ImageSourcePropType;
};

const GroupComponent11 = ({ dimensionCode }: GroupComponent11Type) => {
  return (
    <View style={styles.vectorParent}>
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
      <Text style={styles.urutBerdasarkan}>Urut Berdasarkan</Text>
      <View style={styles.groupParent}>
        <View style={styles.groupContainerPosition}>
          <View style={[styles.rectangleWrapper, styles.rectangleShadowBox]}>
            <View style={[styles.groupItem, styles.groupBg]} />
          </View>
          <Text style={[styles.bulanan, styles.bulananTypo]}>Bulanan</Text>
        </View>
        <View style={[styles.rectangleParent, styles.rectangleShadowBox]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <View style={[styles.rectangleView, styles.groupInnerLayout]} />
          <Text style={[styles.mingguan, styles.bulananTypo]}>Mingguan</Text>
          <Text style={[styles.langsung, styles.langsungTypo]}>Langsung</Text>
        </View>
      </View>
      <View style={[styles.vectorGroup, styles.vectorGroupPosition]}>
        <Image
          style={[styles.rectangleIcon, styles.vectorGroupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={dimensionCode}
        />
        <Text style={[styles.cariLauk, styles.langsungTypo]}>Cari Lauk...</Text>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupBg: {
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  bulananTypo: {
    color: Color.colorLightgray_300,
    fontFamily: FontFamily.jostRegular,
    fontSize: FontSize.size_mid,
    top: 10,
    textAlign: "left",
    position: "absolute",
  },
  groupInnerLayout: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_2xs,
    width: 77,
    top: 0,
    height: 44,
    position: "absolute",
  },
  langsungTypo: {
    fontFamily: FontFamily.jostRegular,
    textAlign: "left",
    position: "absolute",
  },
  vectorGroupPosition: {
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
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorWhite,
    width: 77,
    top: 0,
    height: 44,
    position: "absolute",
  },
  rectangleWrapper: {
    width: 77,
    left: 0,
    top: 0,
    height: 44,
    position: "absolute",
  },
  bulanan: {
    marginLeft: -28.5,
    left: "50%",
  },
  groupContainerPosition: {
    width: 77,
    left: 0,
    top: 0,
    height: 44,
    position: "absolute",
  },
  groupInner: {
    borderColor: Color.colorWhite,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  rectangleView: {
    left: 115,
    backgroundColor: Color.colorMediumseagreen_200,
    borderColor: Color.colorMediumseagreen_200,
  },
  mingguan: {
    left: 3,
  },
  langsung: {
    left: 120,
    color: Color.colorWhite,
    fontSize: FontSize.size_mid,
    top: 10,
    fontFamily: FontFamily.jostRegular,
  },
  rectangleParent: {
    left: 113,
    width: 192,
    top: 0,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 44,
    position: "absolute",
  },
  groupParent: {
    top: 75,
    left: 4,
    width: 305,
    height: 44,
    position: "absolute",
  },
  rectangleIcon: {
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
    color: Color.colorLightgray_100,
    width: 94,
  },
  ellipseIcon: {
    top: 17,
    left: 21,
    width: 13,
    height: 12,
    position: "absolute",
  },
  vectorGroup: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  vectorParent: {
    top: 149,
    left: 31,
    height: 140,
    width: 316,
    position: "absolute",
  },
});

export default GroupComponent11;
