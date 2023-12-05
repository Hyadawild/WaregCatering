import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import GroupComponent18 from "../components/GroupComponent18";
import PriceCard from "../components/PriceCard";
import GroupComponent19 from "../components/GroupComponent19";
import DarkModeYES from "../components/DarkModeYES";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DarkModeNO from "../components/DarkModeNO";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone11ProX12 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProX12}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Text style={styles.detailPemesanan}>Detail Pemesanan</Text>
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <View style={[styles.rectangleParent, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <Text style={styles.daftarPemesanan}>Daftar Pemesanan</Text>
        <View style={[styles.totalParent, styles.totalLayout]}>
          <Text style={[styles.total, styles.xTypo]}>TOTAL</Text>
          <Text style={[styles.rp20000, styles.rp20000Typo]}>Rp. 20.000</Text>
        </View>
        <Image
          style={[styles.groupItem, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
      </View>
      <GroupComponent18 />
      <PriceCard />
      <PriceCard propTop={351} />
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.groupInner, styles.groupShadowBox]} />
        <View style={[styles.totalGroup, styles.totalLayout]}>
          <Text style={[styles.total, styles.xTypo]}>TOTAL</Text>
          <Text style={[styles.rp20000, styles.rp20000Typo]}>Rp. 14.000</Text>
        </View>
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
      </View>
      <GroupComponent19 />
      <View style={[styles.nasiAyamSayurParent, styles.jakarta25IconPosition]}>
        <Text style={[styles.nasiAyam, styles.xTypo]}>Nasi + Ayam + Sayur</Text>
        <Text style={[styles.x, styles.xTypo]}>1x</Text>
        <Text style={[styles.rp140001, styles.rp20000Typo]}>Rp. 14.000</Text>
      </View>
      <Image
        style={[styles.jakarta25Icon, styles.jakarta25IconPosition]}
        contentFit="cover"
        source={require("../assets/jakarta2-5.png")}
      />
      <DarkModeYES
        notch={require("../assets/notch.png")}
        networkSignalDark={require("../assets/network-signal--dark1.png")}
        wiFiSignalDark={require("../assets/wifi-signal--dark1.png")}
        batteryDark={require("../assets/battery--dark.png")}
        indicator={require("../assets/indicator.png")}
        timeDark={require("../assets/time--dark.png")}
        darkModeYESPosition="absolute"
        darkModeYESTop={-13}
        darkModeYESRight={-1}
        darkModeYESLeft={1}
        notchIconTop={13}
        notchIconRight={0}
        notchIconLeft={0}
        indicatorIconTop={13}
        timeDarkTop={13}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone11ProX8")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/group-77.png")}
        />
      </Pressable>
      <View style={styles.iphone11ShadowBox} />
      <Image
        style={[styles.vectorIcon4, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldhome.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIcon5Position]}
        contentFit="cover"
        source={require("../assets/iconlyboldprofile.png")}
      />
      <Image
        style={styles.vectorIcon6}
        contentFit="cover"
        source={require("../assets/iconlybolddocument.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={styles.iphone11ShadowBox} />
      <Pressable
        style={styles.vectorIcon4Position}
        onPress={() => navigation.navigate("IPhone11ProX8")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlyboldhome.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vectorIcon5Position}
        onPress={() => navigation.navigate("IPhone11ProX16")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlyboldprofile.png")}
        />
      </Pressable>
      <Image
        style={styles.vectorIcon6}
        contentFit="cover"
        source={require("../assets/iconlybolddocument.png")}
      />
      <Pressable
        style={styles.vectorPosition}
        onPress={() => navigation.navigate("IPhone11ProX11")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <DarkModeNO
        darkModeNOPosition="absolute"
        darkModeNORight={3}
        darkModeNOBottom={0}
        darkModeNOLeft={-3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    width: 342,
    left: 17,
    position: "absolute",
  },
  groupShadowBox: {
    height: 224,
    width: 343,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
    left: 0,
    position: "absolute",
  },
  totalLayout: {
    height: 19,
    width: 304,
    left: 23,
    position: "absolute",
  },
  xTypo: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.beVietnam,
    textAlign: "left",
    color: Color.colorBlack,
    left: 0,
    position: "absolute",
  },
  rp20000Typo: {
    width: 69,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.beVietnam,
    top: 0,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  lineIconLayout: {
    height: 1,
    width: 301,
    left: 21,
    position: "absolute",
  },
  jakarta25IconPosition: {
    top: 279,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  vectorIcon5Position: {
    left: "81.07%",
    right: "12.75%",
    width: "6.19%",
    bottom: "3.82%",
    top: "92.86%",
    height: "3.33%",
    position: "absolute",
  },
  vectorPosition: {
    left: "33.87%",
    right: "58.77%",
    bottom: "3.69%",
    top: "92.98%",
    width: "7.36%",
    height: "3.33%",
    position: "absolute",
  },
  vectorIcon: {
    top: 380,
    width: 189,
    height: 315,
    left: 0,
    position: "absolute",
  },
  detailPemesanan: {
    top: 41,
    left: 94,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.biryaniExtraBold,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  vectorIcon1: {
    top: 100,
    left: 253,
    width: 280,
    height: 305,
    position: "absolute",
  },
  groupChild: {
    top: 31,
  },
  daftarPemesanan: {
    left: 2,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    width: 145,
    fontFamily: FontFamily.beVietnam,
    top: 0,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  total: {
    width: 48,
    top: 0,
  },
  rp20000: {
    left: 235,
  },
  totalParent: {
    top: 212,
  },
  groupItem: {
    top: 194,
  },
  rectangleParent: {
    top: 236,
    height: 254,
  },
  groupInner: {
    top: 0,
  },
  totalGroup: {
    top: 181,
  },
  lineIcon: {
    top: 163,
  },
  rectangleGroup: {
    top: 267,
    height: 223,
  },
  nasiAyam: {
    width: 174,
    top: 0,
  },
  x: {
    top: 16,
    width: 27,
  },
  rp140001: {
    left: 172,
  },
  nasiAyamSayurParent: {
    left: 118,
    width: 241,
    height: 35,
  },
  jakarta25Icon: {
    left: 25,
    borderRadius: 35,
    width: 86,
    height: 69,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 12,
    width: 56,
    height: 56,
    top: 31,
    position: "absolute",
  },
  iphone11ShadowBox: {
    height: 88,
    width: 375,
    elevation: 15,
    shadowRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 724,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_300,
  },
  vectorIcon4: {
    left: "11.2%",
    bottom: "3.82%",
    right: "81.44%",
    top: "92.86%",
    width: "7.36%",
    height: "3.33%",
    position: "absolute",
  },
  vectorIcon5: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  vectorIcon6: {
    width: "6.96%",
    right: "36.24%",
    left: "56.8%",
    bottom: "3.69%",
    top: "92.98%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "3.33%",
    position: "absolute",
  },
  vectorIcon7: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vectorIcon4Position: {
    left: "11.2%",
    bottom: "3.82%",
    right: "81.44%",
    top: "92.86%",
    width: "7.36%",
    height: "3.33%",
    position: "absolute",
  },
  iphone11ProX12: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_300,
  },
});

export default IPhone11ProX12;
