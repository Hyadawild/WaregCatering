import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import GroupComponent7 from "./GroupComponent7";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent22 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.vectorParent}>
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/vector-4.png")}
      />
      <Text style={styles.urutBerdasarkan}>Urut Berdasarkan</Text>
      <Pressable
        style={styles.groupWrapper}
        onPress={() => navigation.navigate("IPhone11ProMockupLabel")}
      >
        <View style={styles.groupParent}>
          <View style={[styles.groupContainer, styles.groupContainerLayout]}>
            <View style={[styles.rectangleWrapper, styles.rectangleShadowBox]}>
              <View style={[styles.groupItem, styles.groupBg]} />
            </View>
            <Text style={[styles.bulanan, styles.bulananTypo]}>Bulanan</Text>
          </View>
          <Pressable
            style={[styles.groupFrame, styles.groupFrameLayout]}
            onPress={() => navigation.navigate("IPhone11ProX211")}
          >
            <View style={[styles.rectangleParent, styles.groupFrameLayout]}>
              <View style={[styles.groupInner, styles.groupInnerLayout]} />
              <View style={[styles.rectangleView, styles.groupInnerLayout]} />
              <Text style={[styles.mingguan, styles.bulananTypo]}>
                Mingguan
              </Text>
              <Text style={styles.langsung}>Langsung</Text>
            </View>
          </Pressable>
        </View>
      </Pressable>
      <GroupComponent7 dimensionCode={require("../assets/vector16.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupContainerLayout: {
    width: 77,
    top: 0,
    height: 44,
    position: "absolute",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
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
  groupFrameLayout: {
    width: 192,
    top: 0,
    height: 44,
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
    top: 0,
    height: 44,
    position: "absolute",
  },
  bulanan: {
    marginLeft: -28.5,
    left: "50%",
  },
  groupContainer: {
    left: 0,
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
    fontFamily: FontFamily.jostRegular,
    fontSize: FontSize.size_mid,
    top: 10,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
  },
  groupFrame: {
    left: 113,
  },
  groupParent: {
    left: 0,
    top: 0,
    height: 44,
    width: 305,
    position: "absolute",
  },
  groupWrapper: {
    top: 75,
    left: 4,
    height: 44,
    width: 305,
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

export default GroupComponent22;
