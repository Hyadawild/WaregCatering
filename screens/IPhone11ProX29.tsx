import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DarkModeYES from "../components/DarkModeYES";
import DarkModeNO from "../components/DarkModeNO";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const IPhone11ProX29 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone11ProX29, styles.iphone11ShadowBox]}>
      <Image
        style={styles.iphone11ProX29Child}
        contentFit="cover"
        source={require("../assets/group-66.png")}
      />
      <Image
        style={styles.iphone11ProX29Child}
        contentFit="cover"
        source={require("../assets/group-121.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone11ProX16")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-65.png")}
        />
      </Pressable>
      <Text style={[styles.editProfil, styles.profilTypo]}>Edit Profil</Text>
      <View style={[styles.iphone11ProX29Inner, styles.iphone11ShadowBox]} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <DarkModeYES
        notch={require("../assets/notch.png")}
        networkSignalDark={require("../assets/network-signal--dark1.png")}
        wiFiSignalDark={require("../assets/wifi-signal--dark1.png")}
        batteryDark={require("../assets/battery--dark.png")}
        indicator={require("../assets/indicator.png")}
        timeDark={require("../assets/time--dark.png")}
        darkModeYESPosition="absolute"
        darkModeYESTop={1}
        darkModeYESRight={0}
        darkModeYESLeft={0}
        notchIconTop={0}
        notchIconRight={0}
        notchIconLeft={0}
        indicatorIconTop={8}
        timeDarkTop={12}
      />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("IPhone11ProX16")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.ok, styles.okPosition]}>OK</Text>
      </Pressable>
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <Text style={[styles.profilBerhasilDisimpan, styles.okPosition]}>
        Profil Berhasil Disimpan
      </Text>
      <View style={styles.rectangleViewShadowBox} />
      <Image
        style={[styles.iconlyboldhome, styles.iconlyboldhomeLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldhome.png")}
      />
      <Image
        style={[styles.iconlyboldprofile, styles.iconlyboldhomeLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldprofile.png")}
      />
      <Image
        style={[styles.iconlybolddocument, styles.iconlybolddocumentPosition]}
        contentFit="cover"
        source={require("../assets/iconlybolddocument.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconlybolddocumentPosition]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={styles.rectangleViewShadowBox} />
      <DarkModeNO
        darkModeNOPosition="absolute"
        darkModeNORight={0}
        darkModeNOBottom={0}
        darkModeNOLeft={0}
      />
      <Image
        style={[styles.iconlyboldhome, styles.iconlyboldhomeLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldhome.png")}
      />
      <Image
        style={[styles.iconlyboldprofile, styles.iconlyboldhomeLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldprofile1.png")}
      />
      <Image
        style={[styles.iconlybolddocument1, styles.iconlybolddocumentPosition]}
        contentFit="cover"
        source={require("../assets/iconlybolddocument1.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconlybolddocumentPosition]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone11ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  profilTypo: {
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontSize: FontSize.size_5xl,
  },
  groupChildLayout: {
    height: 27,
    width: 95,
    position: "absolute",
  },
  okPosition: {
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  groupIconPosition: {
    left: "50%",
    position: "absolute",
  },
  iconlyboldhomeLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "3.82%",
    top: "92.86%",
    height: "3.33%",
    position: "absolute",
  },
  iconlybolddocumentPosition: {
    bottom: "3.69%",
    top: "92.98%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "3.33%",
    position: "absolute",
  },
  iphone11ProX29Child: {
    top: 1,
    height: 276,
    width: 375,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 22,
    top: 41,
    width: 56,
    height: 56,
    position: "absolute",
  },
  editProfil: {
    marginLeft: -61.5,
    top: 51,
    fontWeight: "800",
    fontFamily: FontFamily.biryaniExtraBold,
    textShadowRadius: 10,
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  iphone11ProX29Inner: {
    top: 119,
    left: 27,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    shadowRadius: 10,
    elevation: 10,
    width: 322,
    height: 394,
    position: "absolute",
  },
  vectorIcon: {
    top: 302,
    left: 219,
    width: 239,
    height: 202,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorMediumseagreen_100,
    left: 0,
    width: 95,
  },
  ok: {
    marginLeft: -11.5,
    top: 3,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.biryaniBold,
    textAlign: "center",
    color: Color.colorWhite,
  },
  rectangleParent: {
    top: 467,
    left: 140,
  },
  groupIcon: {
    marginTop: -255,
    marginLeft: -88.5,
    top: "50%",
    width: 177,
    height: 182,
  },
  profilBerhasilDisimpan: {
    marginLeft: -137.5,
    top: 341,
    fontFamily: FontFamily.ubuntuBold,
    color: Color.colorMediumseagreen_400,
    textShadowRadius: 7.6,
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontSize: FontSize.size_5xl,
  },
  rectangleViewShadowBox: {
    height: 88,
    elevation: 15,
    shadowRadius: 15,
    top: 724,
    width: 375,
    left: 0,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke_300,
  },
  iconlyboldhome: {
    width: "7.36%",
    right: "81.44%",
    left: "11.2%",
  },
  iconlyboldprofile: {
    width: "6.19%",
    right: "12.75%",
    left: "81.07%",
  },
  iconlybolddocument: {
    right: "36.24%",
    left: "56.8%",
    width: "6.96%",
    top: "92.98%",
  },
  vectorIcon1: {
    width: "7.33%",
    right: "58.8%",
    left: "33.87%",
  },
  iconlybolddocument1: {
    right: "32.77%",
    left: "60.27%",
    width: "6.96%",
    top: "92.98%",
  },
  iphone11ProX29: {
    shadowRadius: 4,
    elevation: 4,
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_300,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
});

export default IPhone11ProX29;
