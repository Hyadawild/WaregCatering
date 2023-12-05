import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import GroupComponent7 from "./GroupComponent7";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const GroupComponent23 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.vectorParent}>
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
      <Text style={styles.urutBerdasarkan}>Urut Berdasarkan</Text>
      <View style={styles.groupParent}>
        <View style={[styles.groupContainer, styles.groupContainerPosition]}>
          <View style={[styles.rectangleWrapper, styles.groupViewShadowBox]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
          </View>
          <Text style={styles.bulanan}>Bulanan</Text>
        </View>
        <View style={[styles.groupView, styles.groupViewShadowBox]}>
          <Pressable
            style={[styles.rectangleParent, styles.groupContainerPosition1]}
            onPress={() => navigation.navigate("IPhone11ProX8")}
          >
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Text style={[styles.langsung, styles.langsungTypo]}>Langsung</Text>
          </Pressable>
          <Pressable
            style={[styles.groupContainer, styles.groupContainerPosition]}
            onPress={() => navigation.navigate("IPhone11ProX211")}
          >
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Text style={[styles.mingguan, styles.langsungTypo]}>Mingguan</Text>
          </Pressable>
        </View>
      </View>
      <GroupComponent7 dimensionCode={require("../assets/vector23.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupContainerPosition: {
    left: 0,
    width: 77,
  },
  groupViewShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    height: 44,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_2xs,
    width: 77,
    left: 0,
    top: 0,
    height: 44,
    position: "absolute",
  },
  groupContainerPosition1: {
    top: 0,
    height: 44,
    position: "absolute",
  },
  langsungTypo: {
    color: Color.colorLightgray_300,
    fontFamily: FontFamily.jostRegular,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    top: 136,
    left: 302,
    width: 14,
    height: 8,
    position: "absolute",
  },
  urutBerdasarkan: {
    top: 128,
    left: 205,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.beVietnam,
    color: Color.colorDarkgray_200,
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorMediumseagreen_200,
  },
  rectangleWrapper: {
    width: 77,
    left: 0,
  },
  bulanan: {
    marginLeft: -28.5,
    left: "50%",
    color: Color.colorWhite,
    fontFamily: FontFamily.jostRegular,
    fontSize: FontSize.size_mid,
    top: 10,
    textAlign: "left",
    position: "absolute",
  },
  groupContainer: {
    width: 77,
    top: 0,
    height: 44,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
  },
  langsung: {
    top: 10,
    color: Color.colorLightgray_300,
    left: 5,
  },
  rectangleParent: {
    left: 115,
    width: 77,
  },
  mingguan: {
    top: 9,
    left: 2,
  },
  groupView: {
    left: 114,
    width: 192,
  },
  groupParent: {
    top: 76,
    width: 306,
    height: 44,
    left: 5,
    position: "absolute",
  },
  vectorParent: {
    top: 148,
    left: 31,
    width: 316,
    height: 144,
    position: "absolute",
  },
});

export default GroupComponent23;
