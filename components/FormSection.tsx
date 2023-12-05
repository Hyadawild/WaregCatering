import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const FormSection = () => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text
        style={[styles.metodePembayaranTransfer, styles.ubahTypo]}
      >{`Metode Pembayaran
Transfer`}</Text>
      <Text style={[styles.ubah, styles.ubahTypo]}>Ubah</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 63,
    width: 375,
    left: 0,
    position: "absolute",
  },
  ubahTypo: {
    height: 39,
    textAlign: "left",
    fontFamily: FontFamily.biryaniRegular,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  metodePembayaranTransfer: {
    top: 11,
    left: 23,
    color: Color.colorGray_100,
    width: 185,
  },
  ubah: {
    top: 24,
    left: 323,
    color: Color.colorTurquoise,
    width: 36,
  },
  rectangleParent: {
    top: 250,
  },
});

export default FormSection;
