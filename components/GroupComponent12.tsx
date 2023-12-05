import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

type GroupComponent12Type = {
  dimensionCode?: ImageSourcePropType;

  /** Action props */
  onGroupPressablePress?: () => void;
};

const GroupComponent12 = ({
  dimensionCode,
  onGroupPressablePress,
}: GroupComponent12Type) => {
  return (
    <Pressable style={styles.rectangleParent} onPress={onGroupPressablePress}>
      <View style={styles.groupChild} />
      <Image
        style={styles.jakarta24Icon}
        contentFit="cover"
        source={require("../assets/jakarta2-4.png")}
      />
      <Text style={styles.paketHemat}>Paket Hemat</Text>
      <Text style={styles.nasiAyam}>Nasi + Ayam + Sayur</Text>
      <View style={styles.vectorParent}>
        <Image
          style={styles.groupItem}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
        <Text style={[styles.rp14000, styles.menitTypo]}>Rp. 14.000</Text>
        <Text style={[styles.menit, styles.menitTypo]}>10 Menit</Text>
      </View>
      <Image
        style={styles.starIcon}
        contentFit="cover"
        source={dimensionCode}
      />
      <View style={[styles.rectangleGroup, styles.groupPosition]}>
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Text style={styles.tambah}>Tambah</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  menitTypo: {
    color: Color.colorGray_500,
    fontFamily: FontFamily.beVietnam,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    height: 24,
    width: 69,
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 1,
    left: 0,
    top: 0,
    height: 116,
    width: 347,
    position: "absolute",
  },
  jakarta24Icon: {
    top: 9,
    borderRadius: Border.br_2xl,
    width: 105,
    height: 98,
    left: 14,
    position: "absolute",
  },
  paketHemat: {
    top: 10,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_400,
    textAlign: "left",
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    left: 130,
    position: "absolute",
  },
  nasiAyam: {
    top: 35,
    color: Color.colorGray_300,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    left: 130,
    position: "absolute",
  },
  groupItem: {
    top: 4,
    left: 59,
    width: 1,
    height: 10,
    position: "absolute",
  },
  rp14000: {
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
  },
  tambah: {
    marginTop: -9.4,
    marginLeft: -22.7,
    left: "50%",
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
    width: 50,
    height: 15,
    top: "50%",
    fontFamily: FontFamily.beVietnam,
    textAlign: "left",
    position: "absolute",
  },
  rectangleGroup: {
    left: 272,
  },
  rectangleParent: {
    top: 318,
    height: 116,
    width: 347,
    left: 14,
    position: "absolute",
  },
});

export default GroupComponent12;
