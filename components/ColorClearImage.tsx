import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";
import { Border } from "../GlobalStyles";

type ColorClearImageType = {
  colorClearImageColorClear?: ImageSourcePropType;

  /** Style props */
  colorClearIconPosition?: string;
  colorClearIconTop?: number | string;
  colorClearIconLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ColorClearImage = ({
  colorClearImageColorClear,
  colorClearIconPosition,
  colorClearIconTop,
  colorClearIconLeft,
}: ColorClearImageType) => {
  const colorClearIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", colorClearIconPosition),
      ...getStyleValue("top", colorClearIconTop),
      ...getStyleValue("left", colorClearIconLeft),
    };
  }, [colorClearIconPosition, colorClearIconTop, colorClearIconLeft]);

  return (
    <Image
      style={[styles.colorclearIcon, colorClearIconStyle]}
      contentFit="cover"
      source={colorClearImageColorClear}
    />
  );
};

const styles = StyleSheet.create({
  colorclearIcon: {
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    overflow: "hidden",
  },
});

export default ColorClearImage;
