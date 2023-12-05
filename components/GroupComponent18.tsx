import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const GroupComponent18 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} />
      <Text style={[styles.meja5, styles.meja5Typo]}>Meja 5</Text>
      <Text style={[styles.ahmadAkakom, styles.textLayout]}>Ahmad Akakom</Text>
      <Text style={[styles.informasiPemesanan, styles.textPosition]}>
        Informasi Pemesanan
      </Text>
      <View style={[styles.des20210800Parent, styles.ahmadAkakomPosition]}>
        <Text
          style={[styles.des2021, styles.des2021Typo]}
        >{`18 Des 2021 | 08.00 `}</Text>
        <Text style={[styles.nomorPesanan, styles.textPosition]}>
          Nomor Pesanan
        </Text>
        <Text style={[styles.waktuPemesanan, styles.des2021Typo]}>
          Waktu Pemesanan
        </Text>
        <Text style={[styles.text, styles.textPosition]}>2134382493894</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  meja5Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.beVietnam,
    fontWeight: "500",
    top: 41,
  },
  textLayout: {
    width: 97,
    fontSize: FontSize.size_xs,
  },
  textPosition: {
    top: 0,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.beVietnam,
    position: "absolute",
  },
  ahmadAkakomPosition: {
    left: 19,
    position: "absolute",
  },
  des2021Typo: {
    top: 24,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.beVietnam,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  groupChild: {
    top: 32,
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
    position: "absolute",
  },
  meja5: {
    left: 278,
    width: 43,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.beVietnam,
    fontWeight: "500",
    top: 41,
    position: "absolute",
  },
  ahmadAkakom: {
    left: 19,
    position: "absolute",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.beVietnam,
    fontWeight: "500",
    top: 41,
    width: 97,
  },
  informasiPemesanan: {
    left: 2,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    width: 147,
  },
  des2021: {
    left: 189,
    fontWeight: "300",
    width: 111,
  },
  nomorPesanan: {
    width: 97,
    fontSize: FontSize.size_xs,
    left: 0,
  },
  waktuPemesanan: {
    width: 115,
    left: 0,
  },
  text: {
    left: 207,
    width: 97,
    fontSize: FontSize.size_xs,
  },
  des20210800Parent: {
    top: 64,
    width: 304,
    height: 42,
  },
  rectangleParent: {
    top: 100,
    left: 17,
    width: 342,
    height: 120,
    position: "absolute",
  },
});

export default GroupComponent18;
