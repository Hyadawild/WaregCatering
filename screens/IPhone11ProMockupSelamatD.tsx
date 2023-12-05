import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DarkModeYES from "../components/DarkModeYES";
import DarkModeNO from "../components/DarkModeNO";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const IPhone11ProMockupSelamatD = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone11ProMockupSelamatD, styles.iphone11Layout1]}>
      <LinearGradient
        style={[styles.iphone11ProX18, styles.iphone11Layout]}
        locations={[0.36, 1]}
        colors={["#3eb075", "rgba(105, 191, 112, 0)"]}
      >
        <Image
          style={[styles.iphone11ProX18Child, styles.iphone11Layout]}
          contentFit="cover"
          source={require("../assets/rectangle-53.png")}
        />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector27.png")}
        />
        <Image
          style={styles.iphone11ProX18Item}
          contentFit="cover"
          source={require("../assets/rectangle-50.png")}
        />
        <View style={styles.takashiMiyazakiXqulc3imelaU} />
        <View style={[styles.iphone11ProX18Inner, styles.groupChildLayout]} />
        <Image
          style={[styles.rectangleIcon, styles.iphone11Layout]}
          contentFit="cover"
          source={require("../assets/rectangle-51.png")}
        />
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector28.png")}
        />
        <Text style={styles.selamatDatangKembali}>{`Selamat Datang
Kembali`}</Text>
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector29.png")}
        />
        <Text style={styles.password}>Password</Text>
        <Text style={[styles.lupaPassword, styles.lupaPasswordTypo]}>
          Lupa Password ?
        </Text>
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector30.png")}
        />
        <Pressable
          style={[styles.rectangleParent, styles.groupChildLayout]}
          onPress={() => navigation.navigate("IPhone11ProX8")}
        >
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.masuk, styles.atauTypo]}>{`Masuk `}</Text>
        </Pressable>
        <Pressable
          style={styles.layer85}
          onPress={() => navigation.navigate("IPhone11ProMockupLabel1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/layer-85.png")}
          />
        </Pressable>
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector31.png")}
        />
        <Text
          style={[styles.ilhamgantengmywifegmailcom, styles.lupaPasswordTypo]}
        >
          IlhamGantengMywife@gmail.com
        </Text>
        <Image
          style={[styles.vectorIcon5, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector32.png")}
        />
        <Image
          style={[styles.iphone11ProX18Child1, styles.iphone11ChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-8.png")}
        />
        <Image
          style={[styles.iphone11ProX18Child2, styles.iphone11ChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-9.png")}
        />
        <Image
          style={[styles.iphone11ProX18Child3, styles.iphone11ChildLayout]}
          contentFit="cover"
          source={require("../assets/vector-10.png")}
        />
        <View style={[styles.rectangleView, styles.atauPosition]} />
        <Text style={[styles.atau, styles.atauPosition]}>Atau</Text>
        <View style={styles.groupParent}>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Text style={[styles.facebook, styles.googleTypo]}>Facebook</Text>
            <Image
              style={[styles.facebookOriginal, styles.originalLayout]}
              contentFit="cover"
              source={require("../assets/facebook--original.png")}
            />
          </View>
          <View style={[styles.rectangleContainer, styles.groupLayout]}>
            <View style={[styles.groupInner, styles.groupLayout]} />
            <Text style={[styles.google, styles.googleTypo]}>Google</Text>
            <Image
              style={[styles.googleOriginal, styles.originalLayout]}
              contentFit="cover"
              source={require("../assets/google--original.png")}
            />
          </View>
        </View>
        <DarkModeYES
          notch={require("../assets/notch.png")}
          networkSignalDark={require("../assets/network-signal--dark1.png")}
          wiFiSignalDark={require("../assets/wifi-signal--dark1.png")}
          batteryDark={require("../assets/battery--dark.png")}
          indicator={require("../assets/indicator.png")}
          timeDark={require("../assets/time--dark.png")}
          darkModeYESPosition="absolute"
          darkModeYESTop={-3}
          darkModeYESRight={-1}
          darkModeYESLeft={1}
          notchIconTop={3}
          notchIconRight={0}
          notchIconLeft={0}
          indicatorIconTop={8}
          timeDarkTop={12}
        />
        <DarkModeNO
          darkModeNOPosition="absolute"
          darkModeNORight={1}
          darkModeNOBottom={-1}
          darkModeNOLeft={-1}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone11Layout1: {
    overflow: "hidden",
    height: 812,
  },
  iphone11Layout: {
    width: 375,
    position: "absolute",
  },
  groupChildLayout: {
    height: 52,
    width: 332,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  lupaPasswordTypo: {
    fontFamily: FontFamily.biryaniRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout: {
    width: "4.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  atauTypo: {
    fontFamily: FontFamily.beVietnam,
    fontWeight: "600",
    textAlign: "left",
  },
  iphone11ChildLayout: {
    height: 1,
    width: 321,
    left: 27,
    position: "absolute",
  },
  atauPosition: {
    top: 675,
    position: "absolute",
  },
  groupLayout: {
    width: 155,
    height: 39,
    top: 0,
    position: "absolute",
  },
  googleTypo: {
    fontSize: FontSize.size_mini,
    left: 51,
    top: 7,
    fontFamily: FontFamily.beVietnam,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  originalLayout: {
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  iphone11ProX18Child: {
    top: 315,
    height: 137,
    left: 0,
  },
  vectorIcon: {
    top: 367,
    width: 89,
    height: 132,
    left: 0,
    position: "absolute",
  },
  iphone11ProX18Item: {
    top: 379,
    width: 473,
    height: 433,
    left: 0,
    position: "absolute",
  },
  takashiMiyazakiXqulc3imelaU: {
    top: -177,
    left: -159,
    width: 670,
    height: 919,
    position: "absolute",
  },
  iphone11ProX18Inner: {
    top: 601,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xs,
    left: 21,
    width: 332,
  },
  rectangleIcon: {
    left: 1,
    height: 136,
    top: 0,
  },
  vectorIcon1: {
    left: 291,
    width: 70,
    height: 72,
    top: 0,
    position: "absolute",
  },
  selamatDatangKembali: {
    top: 152,
    left: 24,
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    fontFamily: FontFamily.biryaniExtraBold,
    width: 310,
    height: 113,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 10,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  vectorIcon2: {
    height: "2.34%",
    width: "3.73%",
    top: "65.15%",
    right: "88%",
    left: "8.27%",
    bottom: "32.51%",
    position: "absolute",
  },
  password: {
    top: 532,
    fontFamily: FontFamily.biryaniSemiBold,
    color: "#56bf17",
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    left: 67,
    textAlign: "left",
    position: "absolute",
  },
  lupaPassword: {
    top: 572,
    left: 251,
    color: "#6fcf35",
  },
  vectorIcon3: {
    height: "1.35%",
    top: "66.13%",
    right: "8.53%",
    left: "86.67%",
    bottom: "32.51%",
  },
  groupChild: {
    backgroundColor: "#58b872",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  masuk: {
    top: 8,
    left: 134,
    fontSize: FontSize.size_xl,
    width: 85,
    height: 19,
    color: Color.colorWhite,
    position: "absolute",
  },
  rectangleParent: {
    top: 602,
    left: 21,
    width: 332,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  layer85: {
    left: "5.84%",
    top: "6.67%",
    right: "88.83%",
    bottom: "91.11%",
    width: "5.33%",
    height: "2.22%",
    position: "absolute",
  },
  vectorIcon4: {
    height: "1.72%",
    top: "59.48%",
    right: "86.4%",
    bottom: "38.79%",
    left: "8.8%",
  },
  ilhamgantengmywifegmailcom: {
    top: 481,
    color: "#b8b1b1",
    left: 67,
    fontFamily: FontFamily.biryaniRegular,
  },
  vectorIcon5: {
    height: "1.16%",
    width: "3.63%",
    top: "60.1%",
    right: "8.64%",
    bottom: "38.74%",
    left: "87.73%",
    position: "absolute",
  },
  iphone11ProX18Child1: {
    top: 506,
  },
  iphone11ProX18Child2: {
    top: 557,
  },
  iphone11ProX18Child3: {
    top: 686,
  },
  rectangleView: {
    left: 161,
    width: 53,
    height: 22,
    backgroundColor: Color.colorWhite,
  },
  atau: {
    marginLeft: -14.6,
    left: "50%",
    color: Color.colorBlack,
    fontFamily: FontFamily.beVietnam,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: 675,
  },
  groupItem: {
    backgroundColor: "#3b5998",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xs,
    left: 0,
  },
  facebook: {
    color: Color.colorWhite,
  },
  facebookOriginal: {
    top: 9,
    left: 16,
  },
  rectangleGroup: {
    left: 183,
  },
  groupInner: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xs,
    left: 0,
  },
  google: {
    color: Color.colorBlack,
  },
  googleOriginal: {
    top: 10,
    left: 17,
  },
  rectangleContainer: {
    left: 0,
  },
  groupParent: {
    top: 716,
    width: 338,
    height: 39,
    left: 21,
    position: "absolute",
  },
  iphone11ProX18: {
    right: 0,
    backgroundColor: "transparent",
    top: 0,
    overflow: "hidden",
    height: 812,
  },
  iphone11ProMockupSelamatD: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone11ProMockupSelamatD;
