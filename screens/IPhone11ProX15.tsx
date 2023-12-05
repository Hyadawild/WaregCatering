import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import VectorImage from "../components/VectorImage";
import IndomieGorengCard from "../components/IndomieGorengCard";
import GroupComponent21 from "../components/GroupComponent21";
import DarkModeYES from "../components/DarkModeYES";
import GroupComponent20 from "../components/GroupComponent20";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DarkModeNO from "../components/DarkModeNO";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone11ProX15 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProX15}>
      <View style={styles.iphone11ProX15Child} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector18.png")}
      />
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector14.png")}
      />
      <View style={[styles.cariLaukUntukParent, styles.jakarta26IconPosition]}>
        <Text style={[styles.cariLaukUntuk, styles.makananAndaTypo]}>
          Cari Lauk Untuk
        </Text>
        <Text style={[styles.makananAnda, styles.makananAndaTypo]}>
          Makanan Anda !
        </Text>
      </View>
      <View style={[styles.iphone11ProX15Item, styles.iphone11ShadowBox]} />
      <VectorImage
        vectorImageVector={require("../assets/vector15.png")}
        vectorIconPosition="absolute"
        vectorIconTop={0}
        vectorIconLeft={228}
      />
      <IndomieGorengCard />
      <Image
        style={[styles.jakarta26Icon, styles.jakarta26IconPosition]}
        contentFit="cover"
        source={require("../assets/jakarta2-6.png")}
      />
      <GroupComponent21 />
      <DarkModeYES
        notch={require("../assets/notch.png")}
        networkSignalDark={require("../assets/network-signal--dark1.png")}
        wiFiSignalDark={require("../assets/wifi-signal--dark1.png")}
        batteryDark={require("../assets/battery--dark.png")}
        indicator={require("../assets/indicator.png")}
        timeDark={require("../assets/time--dark.png")}
        darkModeYESPosition="absolute"
        darkModeYESTop={0}
        darkModeYESRight={0}
        darkModeYESLeft={0}
        notchIconTop={0}
        notchIconRight={0}
        notchIconLeft={0}
        indicatorIconTop={8}
        timeDarkTop={12}
      />
      <GroupComponent20 />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("IPhone11ProX13")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.nasiAyam}>Nasi + Ayam + Sayur</Text>
        <Text style={[styles.item, styles.itemTypo]}>1 Item</Text>
        <Text style={[styles.rp14000, styles.itemTypo]}>Rp. 14.000</Text>
      </Pressable>
      <View style={[styles.iphone11ProX15Inner, styles.iphone11ShadowBox]} />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector17.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldprofile.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconlybolddocument1.png")}
      />
      <Pressable
        style={[styles.vector, styles.vectorLayout]}
        onPress={() => navigation.navigate("IPhone11ProX11")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <DarkModeNO
        darkModeNOPosition="absolute"
        darkModeNORight={0}
        darkModeNOBottom={0}
        darkModeNOLeft={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  jakarta26IconPosition: {
    left: 28,
    position: "absolute",
  },
  makananAndaTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    left: 0,
    position: "absolute",
  },
  iphone11ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
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
    color: Color.colorWhite,
    fontFamily: FontFamily.beVietnam,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  vectorLayout: {
    height: "3.33%",
    position: "absolute",
  },
  iphone11ProX15Child: {
    height: 1155,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_300,
  },
  vectorIcon: {
    top: 353,
    left: 257,
    width: 119,
    height: 259,
    position: "absolute",
  },
  vectorIcon1: {
    top: 148,
    width: 100,
    height: 245,
    left: 0,
    position: "absolute",
  },
  cariLaukUntuk: {
    fontSize: FontSize.size_xl,
    height: 32,
    width: 250,
    top: 0,
  },
  makananAnda: {
    top: 32,
    fontSize: FontSize.size_9xl,
    width: 238,
    height: 46,
  },
  cariLaukUntukParent: {
    top: 44,
    height: 78,
    width: 250,
  },
  iphone11ProX15Item: {
    top: 668,
    left: 260,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorLimegreen_100,
    width: 64,
    height: 24,
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  jakarta26Icon: {
    top: 313,
    borderRadius: 19,
    width: 326,
    height: 321,
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumseagreen_200,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 4,
    shadowRadius: 4,
    left: 0,
    top: 0,
  },
  nasiAyam: {
    top: 31,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    color: Color.colorWhite,
    fontFamily: FontFamily.beVietnam,
    left: 18,
    textAlign: "left",
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
  rp14000: {
    top: 19,
    left: 248,
  },
  rectangleParent: {
    top: 646,
    left: 16,
  },
  iphone11ProX15Inner: {
    top: 724,
    left: -1,
    shadowRadius: 15,
    elevation: 15,
    height: 88,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 375,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_300,
  },
  vectorIcon2: {
    right: "81.71%",
    left: "10.93%",
    bottom: "3.82%",
    top: "92.86%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "3.33%",
    position: "absolute",
    width: "7.36%",
  },
  vectorIcon3: {
    width: "6.19%",
    right: "13.01%",
    left: "80.8%",
    bottom: "3.82%",
    top: "92.86%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "3.33%",
    position: "absolute",
  },
  vectorIcon4: {
    width: "6.96%",
    top: "92.98%",
    right: "36.51%",
    bottom: "3.69%",
    left: "56.53%",
    height: "3.33%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "32.8%",
    top: "93.23%",
    right: "59.84%",
    bottom: "3.45%",
    width: "7.36%",
  },
  iphone11ProX15: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_300,
  },
});

export default IPhone11ProX15;
