import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

type SectionCardFormFilter1Type = {
  dimensionCode?: ImageSourcePropType;

  /** Action props */
  onGroupPressablePress?: () => void;
};

const SectionCardFormFilter1 = ({
  dimensionCode,
  onGroupPressablePress,
}: SectionCardFormFilter1Type) => {
  return (
    <View style={[styles.rectangleParent, styles.groupChildPosition]}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Text style={[styles.keranjang, styles.alamatFlexBox]}>Keranjang</Text>
      <Text style={[styles.alamat, styles.alamatFlexBox]}>Alamat</Text>
      <Pressable style={styles.wrapper} onPress={onGroupPressablePress}>
        <Image style={styles.icon} contentFit="cover" source={dimensionCode} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  alamatFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorWhite,
    height: 101,
  },
  keranjang: {
    top: 48,
    left: 141,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.biryaniBold,
    color: Color.colorBlack,
  },
  alamat: {
    top: 164,
    left: 22,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.biryaniRegular,
    color: Color.colorTurquoise,
    width: 89,
    height: 24,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 13,
    top: 35,
    width: 56,
    height: 56,
    position: "absolute",
  },
  rectangleParent: {
    height: 188,
  },
});

export default SectionCardFormFilter1;
