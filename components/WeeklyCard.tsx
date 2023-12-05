import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

type WeeklyCardType = {
  /** Style props */
  propBackgroundColor?: string;
  propBorderColor?: string;
  propColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const WeeklyCard = ({
  propBackgroundColor,
  propBorderColor,
  propColor,
}: WeeklyCardType) => {
  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
      ...getStyleValue("borderColor", propBorderColor),
    };
  }, [propBackgroundColor, propBorderColor]);

  const mingguanStyle = useMemo(() => {
    return {
      ...getStyleValue("color", propColor),
    };
  }, [propColor]);

  return (
    <View style={styles.rectangleParent}>
      <View
        style={[styles.groupChild, styles.groupLayout, rectangleViewStyle]}
      />
      <View style={[styles.groupItem, styles.groupLayout]} />
      <Text style={[styles.mingguan, styles.mingguanTypo, mingguanStyle]}>
        Mingguan
      </Text>
      <Text style={[styles.langsung, styles.mingguanTypo]}>Langsung</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    width: 77,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_2xs,
    top: 0,
    height: 44,
    position: "absolute",
  },
  mingguanTypo: {
    textAlign: "left",
    fontFamily: FontFamily.jostRegular,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    backgroundColor: Color.colorMediumseagreen_200,
    borderColor: Color.colorMediumseagreen_200,
  },
  groupItem: {
    left: 115,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorWhite,
  },
  mingguan: {
    top: 9,
    left: 2,
    color: Color.colorWhitesmoke_100,
  },
  langsung: {
    top: 10,
    left: 120,
    color: Color.colorLightgray_300,
  },
  rectangleParent: {
    top: 197,
    left: 150,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 192,
    height: 44,
    position: "absolute",
  },
});

export default WeeklyCard;
