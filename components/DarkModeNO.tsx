import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

type DarkModeNOType = {
  /** Style props */
  darkModeNOPosition?: string;
  darkModeNORight?: number | string;
  darkModeNOBottom?: number | string;
  darkModeNOLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModeNO = ({
  darkModeNOPosition,
  darkModeNORight,
  darkModeNOBottom,
  darkModeNOLeft,
}: DarkModeNOType) => {
  const darkModeNOStyle = useMemo(() => {
    return {
      ...getStyleValue("position", darkModeNOPosition),
      ...getStyleValue("right", darkModeNORight),
      ...getStyleValue("bottom", darkModeNOBottom),
      ...getStyleValue("left", darkModeNOLeft),
    };
  }, [darkModeNOPosition, darkModeNORight, darkModeNOBottom, darkModeNOLeft]);

  return (
    <View style={[styles.darkModeno, darkModeNOStyle]}>
      <View style={styles.bar}>
        <View style={styles.base} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  bar: {
    right: 121,
    bottom: 8,
    left: 120,
    height: 5,
    position: "absolute",
  },
  darkModeno: {
    height: 34,
    overflow: "hidden",
  },
});

export default DarkModeNO;
