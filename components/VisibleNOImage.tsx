import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

type VisibleNOImageType = {
  visibleNOImageVisibleNO?: ImageSourcePropType;

  /** Style props */
  visibleNOIconPosition?: string;
  visibleNOIconTop?: number | string;
  visibleNOIconRight?: number | string;
  visibleNOIconLeft?: number | string;
  visibleNOIconMaxWidth?: number | string;
  visibleNOIconOverflow?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const VisibleNOImage = ({
  visibleNOImageVisibleNO,
  visibleNOIconPosition,
  visibleNOIconTop,
  visibleNOIconRight,
  visibleNOIconLeft,
  visibleNOIconMaxWidth,
  visibleNOIconOverflow,
}: VisibleNOImageType) => {
  const visibleNOIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", visibleNOIconPosition),
      ...getStyleValue("top", visibleNOIconTop),
      ...getStyleValue("right", visibleNOIconRight),
      ...getStyleValue("left", visibleNOIconLeft),
      ...getStyleValue("maxWidth", visibleNOIconMaxWidth),
      ...getStyleValue("overflow", visibleNOIconOverflow),
    };
  }, [
    visibleNOIconPosition,
    visibleNOIconTop,
    visibleNOIconRight,
    visibleNOIconLeft,
    visibleNOIconMaxWidth,
    visibleNOIconOverflow,
  ]);

  return (
    <Image
      style={[styles.visiblenoIcon, visibleNOIconStyle]}
      contentFit="cover"
      source={visibleNOImageVisibleNO}
    />
  );
};

const styles = StyleSheet.create({
  visiblenoIcon: {
    height: 30,
  },
});

export default VisibleNOImage;
