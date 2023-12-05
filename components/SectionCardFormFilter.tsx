import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

type SectionCardFormFilterType = {
  packageDescription?: string;
  priceText?: string;
  itemImageUrl?: ImageSourcePropType;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
  propLeft1?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionCardFormFilter = ({
  packageDescription,
  priceText,
  itemImageUrl,
  propTop,
  propLeft,
  propLeft1,
}: SectionCardFormFilterType) => {
  const groupView4Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const rectangleIconStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft1),
    };
  }, [propLeft1]);

  return (
    <View
      style={[styles.vectorParent, styles.groupChildLayout, groupView4Style]}
    >
      <Image
        style={[styles.groupChild, styles.groupChildLayout, rectangleIconStyle]}
        contentFit="cover"
        source={require("../assets/rectangle-32.png")}
      />
      <Text style={[styles.paketBulananHemat, styles.rp375000Typo]}>
        {packageDescription}
      </Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Text style={[styles.text, styles.textLayout]}>-</Text>
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Text style={[styles.text1, styles.textLayout]}>{`1
`}</Text>
        <Text style={[styles.text2, styles.textLayout]}>+</Text>
      </View>
      <Image
        style={styles.iconlybolddelete}
        contentFit="cover"
        source={require("../assets/iconlybolddelete.png")}
      />
      <Text style={[styles.rp375000, styles.rp375000Typo]}>{priceText}</Text>
      <Image
        style={styles.jakarta22Icon}
        contentFit="cover"
        source={itemImageUrl}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 105,
    width: 375,
    left: 0,
    position: "absolute",
  },
  rp375000Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    left: 145,
    position: "absolute",
  },
  groupPosition: {
    height: 24,
    top: 3,
    position: "absolute",
  },
  textLayout: {
    width: 8,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    top: 0,
  },
  paketBulananHemat: {
    fontWeight: "600",
    fontFamily: FontFamily.biryaniSemiBold,
    width: 211,
    height: 49,
    top: 1,
  },
  groupItem: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumseagreen_100,
    width: 64,
    left: 0,
    height: 24,
    top: 3,
  },
  text: {
    left: 7,
    height: 16,
    fontFamily: FontFamily.biryaniRegular,
    fontSize: FontSize.size_lg,
    width: 8,
    color: Color.colorWhite,
    top: 0,
  },
  groupInner: {
    left: 43,
    borderTopRightRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
    backgroundColor: Color.colorDarkslategray,
    width: 21,
  },
  text1: {
    top: 6,
    left: 27,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.lexendDecaRegular,
    height: 1,
  },
  text2: {
    left: 49,
    height: 18,
    fontFamily: FontFamily.biryaniRegular,
    fontSize: FontSize.size_lg,
    width: 8,
    color: Color.colorWhite,
    top: 1,
  },
  rectangleParent: {
    top: 67,
    height: 27,
    width: 64,
    left: 145,
    position: "absolute",
  },
  iconlybolddelete: {
    height: "22.86%",
    width: "4.8%",
    top: "63.81%",
    right: "3.2%",
    bottom: "13.33%",
    left: "92%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rp375000: {
    top: 36,
    fontFamily: FontFamily.beVietnam,
  },
  jakarta22Icon: {
    top: 7,
    left: 20,
    borderRadius: Border.br_26xl_5,
    width: 91,
    height: 91,
    position: "absolute",
  },
  vectorParent: {
    top: 352,
  },
});

export default SectionCardFormFilter;
