import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DarkModeYES from "../components/DarkModeYES";
import DarkModeNO from "../components/DarkModeNO";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone11ProX16 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProX16}>
      <Image
        style={styles.iphone11ProX16Child}
        contentFit="cover"
        source={require("../assets/group-121.png")}
      />
      <Text style={[styles.profil, styles.profilTypo]}>Profil</Text>
      <View style={styles.iphone11ProX16Item} />
      <Text style={[styles.ilhamgantengmywifegmailcom, styles.textPosition]}>
        IlhamGantengMywife@gmail.com
      </Text>
      <Text style={[styles.riyandaAjiji, styles.textPosition]}>
        Riyanda Ajiji
      </Text>
      <Text style={[styles.text, styles.textTypo]}>{`089713273223
`}</Text>
      <Pressable
        style={[styles.riwayatPesanan, styles.keluarPosition]}
        onPress={() => navigation.navigate("IPhone11ProX10")}
      >
        <Text style={[styles.riwayatPesanan1, styles.textTypo]}>
          Riwayat Pesanan
        </Text>
      </Pressable>
      <Pressable
        style={[styles.keluar, styles.keluarPosition]}
        onPress={() => navigation.navigate("IPhone11ProMockupSelamatD")}
      >
        <Text style={[styles.riwayatPesanan1, styles.textTypo]}>Keluar</Text>
      </Pressable>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("IPhone11ProX21")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.iphone11ProX16Inner, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-5.png")}
      />
      <Image
        style={styles.whatsappImage20231030At2}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20231030-at-2046-11.png")}
      />
      <DarkModeYES
        notch={require("../assets/notch.png")}
        networkSignalDark={require("../assets/network-signal--dark1.png")}
        wiFiSignalDark={require("../assets/wifi-signal--dark1.png")}
        batteryDark={require("../assets/battery--dark.png")}
        indicator={require("../assets/indicator.png")}
        timeDark={require("../assets/time--dark.png")}
        darkModeYESPosition="absolute"
        darkModeYESTop={6}
        darkModeYESRight={0}
        darkModeYESLeft={0}
        notchIconTop={0}
        notchIconRight={0}
        notchIconLeft={0}
        indicatorIconTop={8}
        timeDarkTop={12}
      />
      <View style={styles.rectangleViewShadowBox} />
      <Image
        style={[styles.iconlyboldhome, styles.iconlyboldhomePosition]}
        contentFit="cover"
        source={require("../assets/iconlyboldhome.png")}
      />
      <Image
        style={styles.iconlyboldprofile}
        contentFit="cover"
        source={require("../assets/iconlyboldprofile.png")}
      />
      <Image
        style={[styles.iconlybolddocument, styles.iconlybolddocumentPosition]}
        contentFit="cover"
        source={require("../assets/iconlybolddocument.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={styles.rectangleViewShadowBox} />
      <DarkModeNO
        darkModeNOPosition="absolute"
        darkModeNORight={0}
        darkModeNOBottom={-3}
        darkModeNOLeft={0}
      />
      <Pressable
        style={styles.iconlyboldhomePosition}
        onPress={() => navigation.navigate("IPhone11ProX8")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlyboldhome.png")}
        />
      </Pressable>
      <Image
        style={styles.iconlyboldprofile}
        contentFit="cover"
        source={require("../assets/iconlyboldprofile1.png")}
      />
      <Pressable
        style={styles.iconlybolddocumentPosition}
        onPress={() => navigation.navigate("IPhone11ProX12")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlybolddocument1.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconlybolddocument2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/iconlybolddocument2.png")}
      />
      <Pressable
        style={styles.vectorPosition}
        onPress={() => navigation.navigate("IPhone11ProX11")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  profilTypo: {
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    textAlign: "left",
  },
  textPosition: {
    left: 147,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  keluarPosition: {
    left: 77,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  vectorIconLayout: {
    left: "12.53%",
    right: "82.67%",
    width: "4.8%",
    height: "2.22%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  lineIconLayout: {
    height: 1,
    width: 286,
    position: "absolute",
  },
  iconlyboldhomePosition: {
    left: "11.2%",
    right: "81.44%",
    width: "7.36%",
    bottom: "3.82%",
    top: "92.86%",
    height: "3.33%",
    position: "absolute",
  },
  iconlybolddocumentPosition: {
    left: "56.8%",
    bottom: "3.69%",
    right: "36.24%",
    top: "92.98%",
    width: "6.96%",
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
  iphone11ProX16Child: {
    top: 6,
    height: 276,
    width: 375,
    left: 0,
    position: "absolute",
  },
  profil: {
    marginLeft: -34.5,
    top: 67,
    left: "50%",
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 10,
    textAlign: "left",
    position: "absolute",
  },
  iphone11ProX16Item: {
    top: 145,
    left: 27,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    shadowRadius: 10,
    elevation: 10,
    width: 322,
    height: 232,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  ilhamgantengmywifegmailcom: {
    top: 199,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.biryaniRegular,
    width: 201,
    height: 21,
    color: Color.colorBlack,
    textAlign: "left",
  },
  riyandaAjiji: {
    top: 169,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
  },
  text: {
    top: 220,
    fontFamily: FontFamily.beVietnam,
    color: "#7d7d7d",
    left: 147,
    position: "absolute",
  },
  riwayatPesanan1: {
    fontWeight: "600",
    fontFamily: FontFamily.biryaniSemiBold,
    color: Color.colorBlack,
  },
  riwayatPesanan: {
    top: 276,
  },
  keluar: {
    top: 318,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "84.27%",
    top: "19.83%",
    right: "11.73%",
    bottom: "78.33%",
    width: "4%",
    height: "1.85%",
    position: "absolute",
  },
  vectorIcon: {
    top: "39.16%",
    bottom: "58.62%",
  },
  iphone11ProX16Inner: {
    top: 301,
    left: 45,
  },
  lineIcon: {
    top: 343,
    left: 43,
  },
  whatsappImage20231030At2: {
    top: 155,
    left: 34,
    borderRadius: Border.br_47xl,
    width: 89,
    height: 93,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    height: 88,
    elevation: 15,
    shadowRadius: 15,
    top: 724,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_300,
  },
  iconlyboldhome: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  iconlyboldprofile: {
    width: "6.19%",
    right: "12.75%",
    left: "81.07%",
    bottom: "3.82%",
    top: "92.86%",
    height: "3.33%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconlybolddocument: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  vectorIcon1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  iconlybolddocument2: {
    top: "33.99%",
    bottom: "63.79%",
  },
  iphone11ProX16: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_300,
  },
});

export default IPhone11ProX16;
