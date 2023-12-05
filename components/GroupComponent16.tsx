import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

type GroupComponent16Type = {
  imageDimensions?: ImageSourcePropType;
  packageName?: string;
  componentId?: ImageSourcePropType;
  price?: string;
  dimensionCode?: ImageSourcePropType;
  imageDimensionsText?: ImageSourcePropType;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
  propWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent16 = ({
  imageDimensions,
  packageName,
  componentId,
  price,
  dimensionCode,
  imageDimensionsText,
  propTop,
  propLeft,
  propWidth,
}: GroupComponent16Type) => {
  const paketMingguanNgilerStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const groupView3Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <Image
        style={styles.jakarta24Icon}
        contentFit="cover"
        source={imageDimensions}
      />
      <Text style={[styles.paketMingguanNgiler, paketMingguanNgilerStyle]}>
        {packageName}
      </Text>
      <View style={[styles.vectorParent, groupView3Style]}>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={componentId}
        />
        <Text style={[styles.rp150000, styles.tambahTypo]}>{price}</Text>
      </View>
      <Image
        style={[styles.starIcon, styles.iconLayout]}
        contentFit="cover"
        source={dimensionCode}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.tambah, styles.tambahTypo]}>Tambah</Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={imageDimensionsText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 116,
    width: 347,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  tambahTypo: {
    fontFamily: FontFamily.beVietnam,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupLayout: {
    height: 24,
    width: 69,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    height: 116,
    width: 347,
    position: "absolute",
  },
  jakarta24Icon: {
    top: 15,
    left: 16,
    borderRadius: Border.br_2xl,
    width: 89,
    height: 81,
    position: "absolute",
  },
  paketMingguanNgiler: {
    top: 24,
    left: 112,
    fontSize: FontSize.size_smi,
    fontWeight: "800",
    fontFamily: FontFamily.biryaniExtraBold,
    color: Color.colorGray_400,
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
    top: 4,
    left: 59,
    width: 1,
    height: 10,
    position: "absolute",
  },
  rp150000: {
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_500,
    left: 0,
    top: 0,
  },
  vectorParent: {
    top: 75,
    left: 130,
    width: 62,
    height: 16,
    position: "absolute",
  },
  starIcon: {
    height: "9.48%",
    width: "19.88%",
    top: "50.86%",
    right: "42.65%",
    bottom: "39.66%",
    left: "37.46%",
  },
  groupInner: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumseagreen_200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 0,
    top: 0,
  },
  tambah: {
    marginLeft: -22.7,
    top: 3,
    left: "50%",
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    width: 50,
    height: 15,
  },
  rectangleGroup: {
    top: 46,
    left: 272,
  },
  vectorIcon: {
    height: "23.28%",
    width: "7.93%",
    top: "9.48%",
    right: "6.2%",
    bottom: "67.24%",
    left: "85.88%",
  },
  rectangleParent: {
    top: 608,
    left: 15,
  },
});

export default GroupComponent16;
