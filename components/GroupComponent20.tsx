import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import GroupComponent7 from "./GroupComponent7";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent20 = () => {
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
          <Pressable
            style={[styles.groupContainer, styles.groupContainerPosition]}
            onPress={() => navigation.navigate("IPhone11ProMockupLabel")}
          >
            <View style={[styles.rectangleWrapper, styles.groupViewShadowBox]}>
              <View style={styles.groupItem} />
            </View>
          </Pressable>
          <Text style={[styles.bulanan, styles.bulananTypo]}>Bulanan</Text>
        </View>
        <View style={[styles.groupView, styles.groupViewShadowBox]}>
          <Pressable
            style={[styles.rectangleParent, styles.groupContainerPosition1]}
            onPress={() => navigation.navigate("IPhone11ProX8")}
          >
            <View style={[styles.groupInner, styles.groupInnerLayout]} />
            <Text style={styles.langsung}>Langsung</Text>
          </Pressable>
          <Pressable
            style={[styles.groupContainer, styles.groupContainerPosition]}
            onPress={() => navigation.navigate("IPhone11ProX211")}
          >
            <View style={[styles.rectangleView, styles.groupInnerLayout]} />
            <Text style={[styles.mingguan, styles.bulananTypo]}>Mingguan</Text>
          </Pressable>
        </View>
      </View>
      <GroupComponent7 dimensionCode={require("../assets/vector16.png")} />
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
  bulananTypo: {
    color: Color.colorLightgray_300,
    fontFamily: FontFamily.jostRegular,
    fontSize: FontSize.size_mid,
    top: 10,
    textAlign: "left",
    position: "absolute",
  },
  groupContainerPosition1: {
    top: 0,
    height: 44,
    position: "absolute",
  },
  groupInnerLayout: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_2xs,
    width: 77,
    left: 0,
    top: 0,
    height: 44,
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
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_2xs,
    width: 77,
    left: 0,
    top: 0,
    height: 44,
    position: "absolute",
  },
  rectangleWrapper: {
    width: 77,
    left: 0,
  },
  groupContainer: {
    width: 77,
    top: 0,
    height: 44,
    position: "absolute",
  },
  bulanan: {
    marginLeft: -28.5,
    left: "50%",
  },
  groupInner: {
    backgroundColor: Color.colorMediumseagreen_200,
    borderColor: Color.colorMediumseagreen_200,
  },
  langsung: {
    left: 5,
    color: Color.colorWhite,
    fontFamily: FontFamily.jostRegular,
    fontSize: FontSize.size_mid,
    top: 10,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    left: 115,
    width: 77,
  },
  rectangleView: {
    borderColor: Color.colorWhite,
    backgroundColor: Color.colorWhite,
  },
  mingguan: {
    left: 3,
  },
  groupView: {
    left: 113,
    width: 192,
  },
  groupParent: {
    top: 75,
    left: 4,
    width: 305,
    height: 44,
    position: "absolute",
  },
  vectorParent: {
    top: 149,
    left: 31,
    width: 316,
    height: 140,
    position: "absolute",
  },
});

export default GroupComponent20;
