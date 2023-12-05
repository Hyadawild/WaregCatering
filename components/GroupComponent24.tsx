import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const GroupComponent24 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.groupWrapper, styles.groupLayout]}>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.groupContainer, styles.groupLayout]}>
            <Image
              style={[styles.groupChild, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/vector-11.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector33.png")}
            />
            <Text style={styles.sandi}>Sandi</Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupFrame, styles.groupLayout]}>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/vector-11.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector33.png")}
          />
          <Text style={styles.sandi}>Konfirmasi Sandi</Text>
        </View>
      </View>
      <View style={[styles.vectorContainer, styles.vectorPosition]}>
        <Image
          style={[styles.groupInner, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector34.png")}
        />
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      </View>
      <View style={[styles.groupView, styles.vectorPosition]}>
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector35.png")}
        />
        <Text style={[styles.email, styles.emailTypo]}>Nama</Text>
      </View>
      <View style={[styles.vectorParent1, styles.vectorPosition]}>
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-11.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector36.png")}
        />
        <Text style={[styles.noTelepon, styles.emailTypo]}>No. Telepon</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 28,
    left: 0,
    width: 321,
    position: "absolute",
  },
  groupChildLayout: {
    height: 1,
    left: 0,
    width: 321,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorPosition: {
    left: 0,
    width: 321,
    position: "absolute",
  },
  emailTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.biryaniSemiBold,
    fontWeight: "600",
    left: 27,
    position: "absolute",
  },
  groupChild: {
    top: 28,
  },
  vectorIcon: {
    height: "67.86%",
    width: "4.36%",
    right: "95.64%",
    bottom: "32.14%",
    left: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "0%",
  },
  sandi: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.biryaniSemiBold,
    fontWeight: "600",
    left: 27,
    top: 2,
    position: "absolute",
  },
  groupContainer: {
    top: 0,
  },
  groupWrapper: {
    top: 144,
  },
  groupFrame: {
    top: 194,
  },
  groupInner: {
    top: 25,
  },
  vectorIcon2: {
    height: "56%",
    width: "5.61%",
    top: "8%",
    right: "94.39%",
    bottom: "36%",
    left: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  email: {
    top: 0,
  },
  vectorContainer: {
    top: 46,
    height: 25,
  },
  groupChild1: {
    top: 26,
  },
  vectorIcon3: {
    height: "61.54%",
    width: "4.98%",
    top: "3.85%",
    right: "95.02%",
    bottom: "34.62%",
    left: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  groupView: {
    height: 26,
    top: 0,
  },
  groupChild2: {
    top: 29,
  },
  vectorIcon4: {
    height: "68.97%",
    width: "3.74%",
    right: "95.33%",
    bottom: "31.03%",
    left: "0.93%",
    top: "0%",
  },
  noTelepon: {
    top: 2,
    fontSize: FontSize.size_xs,
  },
  vectorParent1: {
    top: 93,
    height: 29,
  },
  groupParent: {
    top: 463,
    left: 26,
    height: 222,
    width: 321,
    position: "absolute",
  },
});

export default GroupComponent24;
