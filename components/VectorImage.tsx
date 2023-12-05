import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

type VectorImageType = {
  vectorImageVector?: ImageSourcePropType;

  /** Style props */
  vectorIconPosition?: string;
  vectorIconTop?: number | string;
  vectorIconLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const VectorImage = ({
  vectorImageVector,
  vectorIconPosition,
  vectorIconTop,
  vectorIconLeft,
}: VectorImageType) => {
  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", vectorIconPosition),
      ...getStyleValue("top", vectorIconTop),
      ...getStyleValue("left", vectorIconLeft),
    };
  }, [vectorIconPosition, vectorIconTop, vectorIconLeft]);

  return (
    <Image
      style={[styles.vectorIcon, vectorIconStyle]}
      contentFit="cover"
      source={vectorImageVector}
    />
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 147,
    height: 100,
  },
});

export default VectorImage;
