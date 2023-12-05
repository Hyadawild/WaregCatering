import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DarkModeYES from "../components/DarkModeYES";
import DarkModeNO from "../components/DarkModeNO";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const IPhone11ProX6 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProX6}>
      <Image
        style={styles.iphone11ProX6Child}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Text style={styles.pesananaDiterima}>Pesanana Diterima</Text>
      <Text
        style={styles.pesananAndaTelah}
      >{`Pesanan Anda telah diterima dan akan segera
disiapkan, silakan tunggu dengan
santai ya..`}</Text>
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
      <DarkModeNO
        darkModeNOPosition="absolute"
        darkModeNORight={3}
        darkModeNOBottom={0}
        darkModeNOLeft={-3}
      />
      <View style={styles.frame}>
        <Pressable
          style={[styles.frameChild, styles.pressableShadowBox]}
          onPress={() => navigation.navigate("IPhone11ProX12")}
        />
        <Text style={[styles.lihatPesanan, styles.lihatPesananPosition]}>
          Lihat Pesanan
        </Text>
      </View>
      <View style={[styles.frame1, styles.frame1Layout]}>
        <LinearGradient
          style={[styles.wrapper, styles.frame1Layout]}
          locations={[0.57, 1]}
          colors={["#44b300", "#6fcf35"]}
        >
          <Pressable
            style={[styles.pressable, styles.pressableShadowBox]}
            onPress={() => navigation.navigate("IPhone11ProX8")}
          />
        </LinearGradient>
        <Text
          style={[styles.pesanLainnya, styles.lihatPesananPosition]}
        >{`Pesan Lainnya          `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pressableShadowBox: {
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_5xs_8,
  },
  lihatPesananPosition: {
    left: 50,
    top: 11,
    textAlign: "center",
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frame1Layout: {
    height: 36,
    width: 193,
    position: "absolute",
  },
  iphone11ProX6Child: {
    top: 151,
    left: 87,
    width: 203,
    height: 210,
    position: "absolute",
  },
  pesananaDiterima: {
    marginLeft: -107.5,
    top: 413,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.ubuntuBold,
    color: Color.colorMediumseagreen_400,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  pesananAndaTelah: {
    marginLeft: -324.5,
    top: 462,
    width: 649,
    height: 14,
    textAlign: "center",
    fontFamily: FontFamily.josefinSansRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    borderStyle: "solid",
    borderColor: "#c0c0c0",
    borderWidth: 0.5,
    width: 186,
    height: 34,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  lihatPesanan: {
    color: Color.colorBlack,
    left: 50,
    top: 11,
  },
  frame: {
    top: 568,
    left: 92,
    width: 185,
    height: 33,
    position: "absolute",
    overflow: "hidden",
  },
  pressable: {
    height: "100%",
    backgroundColor: "transparent",
    width: "100%",
  },
  wrapper: {
    left: 0,
    top: 0,
  },
  pesanLainnya: {
    color: Color.colorWhite,
  },
  frame1: {
    top: 632,
    left: 91,
    overflow: "hidden",
  },
  iphone11ProX6: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone11ProX6;
