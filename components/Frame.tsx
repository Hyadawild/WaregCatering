import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import DarkModeNO from "./DarkModeNO";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Frame = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.frame, styles.frameLayout3]}>
      <View style={[styles.frame1, styles.frameLayout4]}>
        <DarkModeNO
          darkModeNOPosition="absolute"
          darkModeNORight={2}
          darkModeNOBottom={0}
          darkModeNOLeft={0}
        />
      </View>
      <LinearGradient
        style={[styles.frameChild, styles.frameLayout3]}
        locations={[0, 0.58]}
        colors={["rgba(3, 3, 3, 0)", "rgba(0, 0, 0, 0.8)"]}
      />
      <View style={styles.frame2} />
      <View style={[styles.frame3, styles.frameLayout]}>
        <Text
          style={styles.pesanLangsungDari}
        >{`Pesan langsung dari ponsel Anda,
Lebih Cepat dan Praktis`}</Text>
      </View>
      <View style={[styles.frame4, styles.frameLayout]}>
        <Pressable
          style={[styles.frameItem, styles.frameLayout]}
          onPress={() => navigation.navigate("IPhone11ProMockupBuatAkun")}
        />
      </View>
      <View style={[styles.frame5, styles.frame5Layout]}>
        <Text
          style={[styles.tempatDimanaMakan, styles.frame5Layout]}
        >{`Tempat dimana makan gak cuma makan, tapi makan sambil ngobrol ngalor ngidul. Ada orang bilang tempat ini merupakan tempat penitipan suami... `}</Text>
      </View>
      <Text style={[styles.waregCateringPilih, styles.frame5Layout1]}>
        Wareg Catering, pilih lauk yang Anda sukai dengan lebih mudah !
      </Text>
      <View style={[styles.frame6, styles.framePosition]}>
        <Text style={[styles.sudahPunyaAkun, styles.textTypo]}>
          Sudah Punya Akun?
        </Text>
      </View>
      <View style={[styles.frame7, styles.framePosition]}>
        <Pressable
          style={styles.loginPosition}
          onPress={() => navigation.navigate("IPhone11ProMockupSelamatD")}
        >
          <Text style={[styles.text, styles.textTypo]}>
            <Text style={styles.text1}>{` `}</Text>
            <Text style={styles.login1}>Login</Text>
          </Text>
        </Pressable>
      </View>
      <View style={[styles.frame8, styles.frame8Layout]}>
        <Image
          style={[styles.slideEx1, styles.frame8Layout]}
          contentFit="cover"
          source={require("../assets/slide-ex-1.png")}
        />
      </View>
      <View style={styles.frame9}>
        <Text style={[styles.daftar, styles.textTypo]}>Daftar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout3: {
    height: 456,
    position: "absolute",
  },
  frameLayout4: {
    width: 377,
    overflow: "hidden",
  },
  frameLayout: {
    height: 52,
    position: "absolute",
  },
  frame5Layout: {
    height: 41,
    position: "absolute",
  },
  frame5Layout1: {
    width: 331,
    left: 23,
  },
  framePosition: {
    height: 19,
    top: 320,
    overflow: "hidden",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.beVietnam,
    fontWeight: "600",
    height: 19,
    textAlign: "left",
  },
  frame8Layout: {
    height: 13,
    position: "absolute",
  },
  frame1: {
    top: 422,
    height: 34,
    left: 0,
    overflow: "hidden",
    position: "absolute",
  },
  frameChild: {
    left: 1,
    width: 375,
    backgroundColor: "transparent",
    top: 0,
  },
  frame2: {
    top: 228,
    left: 15,
    width: 345,
    height: 51,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    position: "absolute",
  },
  pesanLangsungDari: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.jostRegular,
    width: 294,
    textAlign: "left",
    color: Color.colorWhite,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frame3: {
    width: 333,
    left: 22,
    height: 52,
    overflow: "hidden",
    top: 170,
  },
  frameItem: {
    backgroundColor: Color.colorMediumseagreen_300,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 332,
    borderRadius: Border.br_8xs,
    top: 0,
    left: 0,
  },
  frame4: {
    top: 245,
    width: 333,
    left: 22,
    height: 52,
    overflow: "hidden",
  },
  tempatDimanaMakan: {
    left: 11,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.titilliumWebRegular,
    color: Color.colorGray_200,
    width: 320,
    textAlign: "left",
    top: 0,
  },
  frame5: {
    top: 77,
    width: 331,
    left: 23,
    overflow: "hidden",
  },
  waregCateringPilih: {
    top: 35,
    fontSize: FontSize.size_14xl,
    fontWeight: "700",
    fontFamily: FontFamily.josefinSansBold,
    height: 73,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  sudahPunyaAkun: {
    marginLeft: -71.5,
    width: 172,
    fontSize: FontSize.size_2xs,
    fontWeight: "600",
    left: "50%",
    top: 0,
    position: "absolute",
    color: Color.colorWhite,
  },
  frame6: {
    left: 88,
    width: 201,
  },
  text1: {
    color: Color.colorWhite,
  },
  login1: {
    color: Color.colorMediumseagreen_300,
  },
  text: {
    marginLeft: 34.5,
    width: 36,
    fontSize: FontSize.size_2xs,
    fontWeight: "600",
  },
  loginPosition: {
    left: "50%",
    top: 0,
    position: "absolute",
  },
  frame7: {
    left: 118,
    width: 141,
  },
  slideEx1: {
    width: 48,
    top: 0,
    left: 0,
  },
  frame8: {
    left: 161,
    width: 55,
    top: 170,
    overflow: "hidden",
  },
  daftar: {
    marginLeft: -32.5,
    fontSize: FontSize.size_xl,
    width: 85,
    left: "50%",
    top: 0,
    position: "absolute",
    color: Color.colorWhite,
  },
  frame9: {
    top: 254,
    left: 136,
    width: 105,
    height: 30,
    overflow: "hidden",
    position: "absolute",
  },
  frame: {
    top: 356,
    left: -1,
    overflow: "hidden",
    width: 377,
  },
});

export default Frame;
