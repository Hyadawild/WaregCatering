import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent19 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <Text style={[styles.riyandaAjiji, styles.textTypo]}>{`Riyanda Ajiji
`}</Text>
      <View style={styles.jan20230800Parent}>
        <Text
          style={[styles.jan2023, styles.jan2023Typo]}
        >{`18 Jan 2023 | 08.00 `}</Text>
        <Text style={[styles.nomerOrderan, styles.textTypo]}>
          Nomer Orderan
        </Text>
        <Text style={[styles.waktuPemesanan, styles.jan2023Typo]}>
          Waktu Pemesanan
        </Text>
        <Text style={[styles.text, styles.textTypo]}>2134382493894</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    width: 97,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.beVietnam,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  jan2023Typo: {
    top: 24,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.beVietnam,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 343,
    height: 89,
    left: 0,
    top: 0,
    position: "absolute",
  },
  riyandaAjiji: {
    top: 9,
    fontWeight: "500",
    left: 19,
  },
  jan2023: {
    left: 189,
    fontWeight: "300",
    width: 111,
  },
  nomerOrderan: {
    left: 0,
    top: 0,
  },
  waktuPemesanan: {
    width: 115,
    left: 0,
  },
  text: {
    left: 207,
    top: 0,
  },
  jan20230800Parent: {
    top: 32,
    width: 304,
    height: 42,
    left: 19,
    position: "absolute",
  },
  rectangleParent: {
    top: 132,
    left: 17,
    width: 342,
    height: 88,
    position: "absolute",
  },
});

export default GroupComponent19;
