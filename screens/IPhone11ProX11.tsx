import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import DarkModeYES from "../components/DarkModeYES";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DarkModeNO from "../components/DarkModeNO";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone11ProX11 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProX11}>
      <View style={styles.iphone11ProX11Child} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout2]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={styles.groupShadowBox} />
        <Text style={styles.nasiAyam}>
          Nasi + Ayam + Sayuran adalah kombinasi makanan yang umum di banyak
          negara, terutama di Asia. Ini adalah hidangan seimbang dan menyediakan
          nutrisi penting.
        </Text>
        <Text style={[styles.nasiAyam1, styles.nasiTypo]}>
          Nasi + Ayam + Sayur
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={styles.groupShadowBox} />
        <Text
          style={styles.nasiAyam}
        >{`Merupakan  makanan olahan yang berbahan dasar dari mie instan (indomie) yang dihidangkan bersama telur ceplok. `}</Text>
        <Text
          style={[styles.nasiUduk, styles.nasiTypo]}
        >{`Nasi Uduk + Lauk+ Sayur
`}</Text>
      </View>
      <Image
        style={[styles.jakarta28Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/jakarta2-8.png")}
      />
      <Image
        style={[styles.jakarta29Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/jakarta2-9.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector11.png")}
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
        darkModeYESRight={-4}
        darkModeYESLeft={4}
        notchIconTop={0}
        notchIconRight={0}
        notchIconLeft={0}
        indicatorIconTop={8}
        timeDarkTop={12}
      />
      <View style={styles.iphone11ProX11Item} />
      <Image
        style={[styles.vectorIcon4, styles.vectorIcon4Position]}
        contentFit="cover"
        source={require("../assets/vector12.png")}
      />
      <Pressable
        style={[styles.iconlyboldhome, styles.vectorIcon4Position]}
        onPress={() => navigation.navigate("IPhone11ProX8")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlyboldhome.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.iconlyboldprofile, styles.vectorIcon4Position]}
        onPress={() => navigation.navigate("IPhone11ProX21")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlyboldprofile.png")}
        />
      </Pressable>
      <Pressable
        style={styles.iconlybolddocument}
        onPress={() => navigation.navigate("IPhone11ProX10")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlybolddocument1.png")}
        />
      </Pressable>
      <Text style={[styles.menuFavorit, styles.nasiTypo]}>Menu Favorit</Text>
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
  vectorIconLayout2: {
    width: 115,
    position: "absolute",
  },
  rectangleLayout: {
    height: 316,
    width: 342,
    left: 17,
    position: "absolute",
  },
  nasiTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    width: 287,
    left: 44,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  vectorIcon4Position: {
    bottom: "3.82%",
    top: "92.86%",
    height: "3.33%",
    position: "absolute",
  },
  iphone11ProX11Child: {
    top: 1,
    width: 375,
    backgroundColor: Color.colorWhitesmoke_300,
    position: "absolute",
    left: 0,
    height: 812,
  },
  vectorIcon: {
    top: 403,
    height: 259,
    left: 0,
    width: 115,
  },
  vectorIcon1: {
    top: 167,
    left: 260,
    height: 268,
  },
  groupShadowBox: {
    height: 317,
    width: 343,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: Border.br_3xs,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  nasiAyam: {
    top: 247,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.beVietnam,
    color: Color.colorDarkgray_200,
    width: 300,
    textAlign: "left",
    left: 14,
    position: "absolute",
  },
  nasiAyam1: {
    fontSize: FontSize.size_base,
    top: 219,
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    left: 14,
  },
  rectangleParent: {
    top: 138,
  },
  nasiUduk: {
    width: 211,
    height: 16,
    fontSize: FontSize.size_base,
    top: 219,
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    left: 14,
  },
  rectangleGroup: {
    top: 489,
  },
  jakarta28Icon: {
    top: 151,
    borderRadius: Border.br_52xl,
    height: 199,
  },
  jakarta29Icon: {
    top: 507,
    borderRadius: 200,
    height: 201,
  },
  vectorIcon2: {
    top: "36.45%",
    right: "14.13%",
    bottom: "61.33%",
    left: "81.07%",
    width: "4.8%",
    height: "2.22%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon3: {
    top: "78.57%",
    right: "15.73%",
    bottom: "19.21%",
    left: "79.47%",
    width: "4.8%",
    height: "2.22%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iphone11ProX11Item: {
    top: 724,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 15,
    elevation: 15,
    height: 88,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    width: 375,
    backgroundColor: Color.colorWhitesmoke_300,
    left: 0,
    position: "absolute",
  },
  vectorIcon4: {
    right: "57.97%",
    left: "34.67%",
    width: "7.36%",
    bottom: "3.82%",
    top: "92.86%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  iconlyboldhome: {
    left: "11.2%",
    right: "81.44%",
    width: "7.36%",
    bottom: "3.82%",
    top: "92.86%",
  },
  iconlyboldprofile: {
    right: "12.75%",
    width: "6.19%",
    left: "81.07%",
  },
  iconlybolddocument: {
    left: "58.93%",
    top: "92.98%",
    right: "34.11%",
    bottom: "3.69%",
    width: "6.96%",
    height: "3.33%",
    position: "absolute",
  },
  menuFavorit: {
    marginLeft: -81.5,
    top: 58,
    left: "50%",
    fontSize: FontSize.size_5xl,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 15,
  },
  iphone11ProX11: {
    flex: 1,
    height: 812,
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default IPhone11ProX11;
