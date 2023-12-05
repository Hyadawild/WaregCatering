import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

type PriceCardType = {
  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PriceCard = ({ propTop }: PriceCardType) => {
  const groupView5Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.groupParent, groupView5Style]}>
      <View style={styles.indomieAyamSpesialParent}>
        <Text
          style={[styles.indomieAyamSpesial, styles.xTypo]}
        >{`Indomie Ayam Spesial `}</Text>
        <Text style={[styles.x, styles.xTypo]}>2x</Text>
        <Text style={[styles.rp10000, styles.xTypo]}>Rp. 10.000</Text>
      </View>
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/group-70.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  xTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.beVietnam,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  indomieAyamSpesial: {
    width: 142,
    left: 0,
    color: Color.colorBlack,
    fontFamily: FontFamily.beVietnam,
    fontSize: FontSize.size_smi,
    top: 0,
  },
  x: {
    top: 16,
    width: 27,
    left: 0,
    color: Color.colorBlack,
    fontFamily: FontFamily.beVietnam,
    fontSize: FontSize.size_smi,
  },
  rp10000: {
    left: 162,
    width: 69,
    top: 0,
  },
  indomieAyamSpesialParent: {
    left: 75,
    width: 231,
    height: 35,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: -5,
    left: -10,
    width: 80,
    height: 80,
    position: "absolute",
  },
  groupParent: {
    top: 279,
    left: 38,
    width: 306,
    height: 65,
    position: "absolute",
  },
});

export default PriceCard;
