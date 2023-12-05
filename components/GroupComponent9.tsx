import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

type GroupComponent9Type = {
  packageName?: string;
  priceText?: string;

  /** Action props */
  onGroupPressablePress?: () => void;
};

const GroupComponent9 = ({
  packageName,
  priceText,
  onGroupPressablePress,
}: GroupComponent9Type) => {
  return (
    <Pressable
      style={[styles.rectangleParent, styles.groupChildLayout]}
      onPress={onGroupPressablePress}
    >
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text style={styles.paketMingguanGacor}>{packageName}</Text>
      <Text style={[styles.item, styles.itemTypo]}>1 Item</Text>
      <Text style={[styles.rp125000, styles.itemTypo]}>{priceText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 60,
    width: 343,
    position: "absolute",
  },
  itemTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.beVietnam,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumseagreen_200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  paketMingguanGacor: {
    top: 31,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.beVietnam,
    left: 18,
    position: "absolute",
  },
  item: {
    top: 8,
    left: 18,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },
  rp125000: {
    top: 18,
    left: 223,
  },
  rectangleParent: {
    top: 644,
    left: 15,
  },
});

export default GroupComponent9;
