import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DarkModeYES from "../components/DarkModeYES";
import DarkModeNO from "../components/DarkModeNO";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone11ProX21 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProX21}>
      <Image
        style={styles.iphone11ProX21Child}
        contentFit="cover"
        source={require("../assets/group-66.png")}
      />
      <Image
        style={styles.iphone11ProX21Child}
        contentFit="cover"
        source={require("../assets/group-121.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone11ProX16")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/group-65.png")}
        />
      </Pressable>
      <Text style={styles.editProfil}>Edit Profil</Text>
      <View style={styles.iphone11ProX21Inner} />
      <Text style={[styles.text, styles.textTypo]}>081696969696</Text>
      <Text style={[styles.ilhamgantengmywifegmailcom, styles.textTypo]}>
        IlhamGantengMywife@gmail.com
      </Text>
      <Text style={[styles.nama, styles.namaTypo]}>Nama</Text>
      <Text style={[styles.notelepon, styles.namaTypo]}>No.Telepon</Text>
      <Text style={[styles.riyandaAjiji, styles.textTypo]}>{`Riyanda Ajiji
`}</Text>
      <View style={[styles.rectangleView, styles.childLayout]} />
      <View style={styles.emailParent}>
        <Text style={[styles.email, styles.emailPosition]}>Email</Text>
        <View style={[styles.groupChild, styles.childLayout]} />
      </View>
      <View style={[styles.iphone11ProX21Child1, styles.childLayout]} />
      <Pressable
        style={[styles.rectangleParent, styles.groupItemLayout]}
        onPress={() => navigation.navigate("IPhone11ProX29")}
      >
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={styles.simpan}>Simpan</Text>
      </Pressable>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.whatsappImage20231030At2, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/whatsapp-image-20231030-at-2046-1.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group-118.png")}
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
      <View style={styles.iphone11ChildShadowBox} />
      <Image
        style={[styles.iconlyboldhome, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldhome.png")}
      />
      <Image
        style={[styles.iconlyboldprofile, styles.iconLayout]}
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
      <View style={styles.iphone11ChildShadowBox} />
      <DarkModeNO
        darkModeNOPosition="absolute"
        darkModeNORight={0}
        darkModeNOBottom={0}
        darkModeNOLeft={0}
      />
      <Pressable
        style={styles.iconlyboldhomePosition}
        onPress={() => navigation.navigate("IPhone11ProX8")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlyboldhome.png")}
        />
      </Pressable>
      <Image
        style={[styles.iconlyboldprofile, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldprofile1.png")}
      />
      <Pressable
        style={styles.iconlybolddocumentPosition}
        onPress={() => navigation.navigate("IPhone11ProX10")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlybolddocument1.png")}
        />
      </Pressable>
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
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.biryaniRegular,
    left: 68,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  namaTypo: {
    fontFamily: FontFamily.beVietnam,
    fontWeight: "500",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  childLayout: {
    height: 34,
    borderWidth: 1,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
    width: 261,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  emailPosition: {
    top: 0,
    left: 0,
  },
  groupItemLayout: {
    height: 27,
    width: 95,
    position: "absolute",
  },
  groupIconPosition: {
    top: 166,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
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
    right: "58.8%",
    width: "7.33%",
    bottom: "3.69%",
    top: "92.98%",
    height: "3.33%",
    position: "absolute",
  },
  iphone11ProX21Child: {
    top: 1,
    height: 276,
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
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
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.biryaniExtraBold,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 10,
    textAlign: "left",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  iphone11ProX21Inner: {
    top: 119,
    left: 27,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    shadowRadius: 10,
    elevation: 10,
    width: 322,
    height: 394,
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  text: {
    top: 417,
  },
  ilhamgantengmywifegmailcom: {
    top: 354,
  },
  nama: {
    top: 259,
    width: 44,
    left: 57,
  },
  notelepon: {
    top: 387,
    width: 71,
    left: 57,
  },
  riyandaAjiji: {
    top: 288,
  },
  rectangleView: {
    top: 280,
    left: 57,
  },
  email: {
    width: 35,
    fontFamily: FontFamily.beVietnam,
    fontWeight: "500",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    top: 21,
    left: 0,
    borderWidth: 1,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
  },
  emailParent: {
    top: 324,
    height: 55,
    width: 261,
    left: 57,
    position: "absolute",
  },
  iphone11ProX21Child1: {
    top: 408,
    left: 57,
  },
  groupItem: {
    backgroundColor: Color.colorMediumseagreen_100,
    top: 0,
    left: 0,
    borderRadius: Border.br_8xs,
    width: 95,
  },
  simpan: {
    marginLeft: -23.5,
    top: 6,
    fontWeight: "700",
    fontFamily: FontFamily.biryaniBold,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    top: 457,
    left: 140,
  },
  vectorIcon: {
    top: 302,
    left: 219,
    width: 239,
    height: 202,
    position: "absolute",
  },
  whatsappImage20231030At2: {
    marginLeft: -46.2,
    borderRadius: Border.br_47xl,
    width: 92,
    height: 93,
    left: "50%",
    top: 166,
  },
  groupIcon: {
    left: 208,
    width: 25,
    height: 25,
  },
  iphone11ChildShadowBox: {
    height: 88,
    elevation: 15,
    shadowRadius: 15,
    top: 724,
    shadowOpacity: 1,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_300,
  },
  iconlyboldhome: {
    left: "11.2%",
    right: "81.44%",
    width: "7.36%",
    bottom: "3.82%",
    top: "92.86%",
    height: "3.33%",
    position: "absolute",
  },
  iconlyboldprofile: {
    width: "6.19%",
    right: "12.75%",
    left: "81.07%",
    bottom: "3.82%",
    top: "92.86%",
    height: "3.33%",
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
  icon1: {
    height: "100%",
    width: "100%",
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
  iphone11ProX21: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_300,
  },
});

export default IPhone11ProX21;
