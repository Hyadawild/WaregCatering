import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

type GroupComponent17Type = {
  componentImageUrls?: ImageSourcePropType;
  packageImageUrls?: string;
  imageCode?: ImageSourcePropType;
  priceText?: string;
  dimensionCode?: ImageSourcePropType;
  imageDimensions?: ImageSourcePropType;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
  propTop1?: number | string;
  propLeft1?: number | string;
  propWidth?: number | string;
  propRight?: number | string;
  propLeft2?: number | string;

  /** Action props */
  onGroupPressablePress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent17 = ({
  componentImageUrls,
  packageImageUrls,
  imageCode,
  priceText,
  dimensionCode,
  imageDimensions,
  propTop,
  propLeft,
  propTop1,
  propLeft1,
  propWidth,
  propRight,
  propLeft2,
  onGroupPressablePress,
}: GroupComponent17Type) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const paketMingguanGacorStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop1),
      ...getStyleValue("left", propLeft1),
    };
  }, [propTop1, propLeft1]);

  const groupView2Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const vectorIcon2Style = useMemo(() => {
    return {
      ...getStyleValue("right", propRight),
      ...getStyleValue("left", propLeft2),
    };
  }, [propRight, propLeft2]);

  return (
    <View
      style={[styles.rectangleParent, styles.groupChildLayout, groupView1Style]}
    >
      <View style={[styles.groupChild, styles.groupPosition]} />
      <Image
        style={styles.jakarta24Icon}
        contentFit="cover"
        source={componentImageUrls}
      />
      <Text style={[styles.paketMingguanGacor, paketMingguanGacorStyle]}>
        {packageImageUrls}
      </Text>
      <View style={[styles.vectorParent, groupView2Style]}>
        <Image style={styles.groupItem} contentFit="cover" source={imageCode} />
        <Text style={[styles.rp125000, styles.tambahTypo]}>{priceText}</Text>
      </View>
      <Image
        style={[styles.starIcon, styles.iconLayout]}
        contentFit="cover"
        source={dimensionCode}
      />
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={onGroupPressablePress}
      >
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.tambah, styles.tambahTypo]}>Tambah</Text>
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.iconLayout, vectorIcon2Style]}
        contentFit="cover"
        source={imageDimensions}
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
  paketMingguanGacor: {
    top: 30,
    left: 114,
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
  rp125000: {
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_500,
    left: 0,
    top: 0,
  },
  vectorParent: {
    top: 75,
    left: 130,
    width: 61,
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
    top: "12.93%",
    right: "5.62%",
    bottom: "63.79%",
    left: "86.46%",
  },
  rectangleParent: {
    top: 464,
    left: 13,
  },
});

export default GroupComponent17;
