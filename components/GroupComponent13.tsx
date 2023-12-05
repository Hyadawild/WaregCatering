import * as React from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

type GroupComponent13Type = {
  dimensionCode?: ImageSourcePropType;
};

const GroupComponent13 = ({ dimensionCode }: GroupComponent13Type) => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View style={[styles.groupChild, styles.groupPosition]} />
      <Image
        style={styles.jakarta24Icon}
        contentFit="cover"
        source={require("../assets/jakarta2-41.png")}
      />
      <Text style={styles.paketKenyang}>Paket Kenyang</Text>
      <Text style={styles.nasiUduk}>Nasi Uduk + Lauk + Sayur</Text>
      <View style={styles.vectorParent}>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
        <Text style={[styles.rp12000, styles.menitTypo]}>Rp. 12.000</Text>
        <Text style={[styles.menit, styles.menitTypo]}>12 Menit</Text>
      </View>
      <Image
        style={styles.starIcon}
        contentFit="cover"
        source={dimensionCode}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={styles.tambah}>Tambah</Text>
      </View>
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
    top: 0,
    left: 0,
  },
  menitTypo: {
    color: Color.colorGray_500,
    fontFamily: FontFamily.beVietnam,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    top: 0,
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
    left: 0,
    height: 116,
    width: 347,
    position: "absolute",
  },
  jakarta24Icon: {
    borderRadius: Border.br_9xl,
    width: 105,
    height: 98,
    top: 10,
    left: 14,
    position: "absolute",
  },
  paketKenyang: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_400,
    textAlign: "left",
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    left: 130,
    top: 10,
    position: "absolute",
  },
  nasiUduk: {
    top: 35,
    left: 129,
    color: Color.colorGray_300,
    width: 143,
    height: 17,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  groupItem: {
    top: 4,
    left: 59,
    width: 1,
    height: 10,
    position: "absolute",
  },
  rp12000: {
    left: 0,
  },
  menit: {
    left: 65,
  },
  vectorParent: {
    top: 75,
    width: 109,
    height: 16,
    left: 130,
    position: "absolute",
  },
  starIcon: {
    height: "9.48%",
    width: "19.88%",
    top: "50.86%",
    right: "42.65%",
    bottom: "39.66%",
    left: "37.46%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
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
    fontFamily: FontFamily.beVietnam,
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroup: {
    top: 46,
    left: 272,
  },
  rectangleParent: {
    top: 464,
    left: 14,
    width: 347,
  },
});

export default GroupComponent13;
