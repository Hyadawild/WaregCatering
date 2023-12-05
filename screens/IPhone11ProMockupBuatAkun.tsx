import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import GroupComponent24 from "../components/GroupComponent24";
import DarkModeNO from "../components/DarkModeNO";
import DarkModeYES from "../components/DarkModeYES";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone11ProMockupBuatAkun = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone11ProMockupBuatAkun, styles.iphone11Layout]}>
      <LinearGradient
        style={[styles.iphone11ProX19, styles.iphone11Layout]}
        locations={[0.17, 0.96]}
        colors={["#3eb075", "rgba(89, 185, 113, 0)"]}
      >
        <Image
          style={styles.iphone11ProX19Child}
          contentFit="cover"
          source={require("../assets/rectangle-531.png")}
        />
        <Image
          style={styles.iphone11ProX19Item}
          contentFit="cover"
          source={require("../assets/rectangle-501.png")}
        />
        <View style={styles.takashiMiyazakiXqulc3imelaU} />
        <View style={[styles.iphone11ProX19Inner, styles.groupChildLayout]} />
        <Text style={[styles.buatAkunBaru, styles.masukFlexBox]}>{`Buat Akun 
Baru `}</Text>
        <Image
          style={styles.rectangleIcon}
          contentFit="cover"
          source={require("../assets/rectangle-52.png")}
        />
        <Pressable
          style={[styles.rectangleParent, styles.groupChildLayout]}
          onPress={() => navigation.navigate("IPhone11ProMockupSelamatD")}
        >
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.masuk, styles.masukFlexBox]}>Masuk</Text>
        </Pressable>
        <GroupComponent24 />
        <Pressable
          style={styles.layer86}
          onPress={() => navigation.navigate("IPhone11ProMockupLabel1")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/layer-85.png")}
          />
        </Pressable>
        <DarkModeNO
          darkModeNOPosition="absolute"
          darkModeNORight={1}
          darkModeNOBottom={0}
          darkModeNOLeft={-1}
        />
        <DarkModeYES
          notch={require("../assets/notch.png")}
          networkSignalDark={require("../assets/network-signal--dark3.png")}
          wiFiSignalDark={require("../assets/wifi-signal--dark3.png")}
          batteryDark={require("../assets/battery--dark2.png")}
          indicator={require("../assets/indicator.png")}
          timeDark={require("../assets/time--dark2.png")}
          darkModeYESPosition="absolute"
          darkModeYESTop={2}
          darkModeYESRight={0}
          darkModeYESLeft={0}
          notchIconTop={0}
          notchIconRight={0}
          notchIconLeft={0}
          indicatorIconTop={8}
          timeDarkTop={12}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone11Layout: {
    height: 812,
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 52,
    width: 332,
    position: "absolute",
  },
  masukFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  iphone11ProX19Child: {
    top: 305,
    height: 150,
    left: 0,
    width: 375,
    position: "absolute",
  },
  iphone11ProX19Item: {
    top: 372,
    width: 473,
    height: 440,
    left: 0,
    position: "absolute",
  },
  takashiMiyazakiXqulc3imelaU: {
    top: -107,
    left: -162,
    width: 670,
    height: 919,
    position: "absolute",
  },
  iphone11ProX19Inner: {
    top: 601,
    left: 21,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xs,
    width: 332,
  },
  buatAkunBaru: {
    top: 150,
    left: 31,
    fontSize: FontSize.size_17xl,
    fontWeight: "800",
    fontFamily: FontFamily.biryaniExtraBold,
    height: 64,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 10,
    width: 375,
  },
  rectangleIcon: {
    height: 115,
    left: 0,
    width: 375,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "#73c194",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xs,
    width: 332,
    left: 0,
    top: 0,
  },
  masuk: {
    marginLeft: -42.3,
    top: 8,
    left: "50%",
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.beVietnam,
    width: 85,
    height: 19,
  },
  rectangleParent: {
    top: 720,
    left: 20,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  layer86: {
    left: "5.52%",
    top: "6.4%",
    right: "89.15%",
    bottom: "91.38%",
    width: "5.33%",
    height: "2.22%",
    position: "absolute",
  },
  iphone11ProX19: {
    right: 0,
    backgroundColor: "transparent",
    width: 375,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iphone11ProMockupBuatAkun: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone11ProMockupBuatAkun;
