import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import VectorImage from "../components/VectorImage";
import IndomieGorengCard from "../components/IndomieGorengCard";
import DarkModeYES from "../components/DarkModeYES";
import WeeklyCard from "../components/WeeklyCard";
import GroupComponent8 from "../components/GroupComponent8";
import GroupComponent9 from "../components/GroupComponent9";
import DarkModeNO from "../components/DarkModeNO";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone11ProX25 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProX25}>
      <View style={[styles.iphone11ProX25Child, styles.iphone11Layout]} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector13.png")}
      />
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector14.png")}
      />
      <View style={styles.cariLaukUntukParent}>
        <Text style={[styles.cariLaukUntuk, styles.bulananFlexBox]}>
          Cari Lauk Untuk
        </Text>
        <Text style={[styles.makananAnda, styles.bulananFlexBox]}>
          Makanan Anda !
        </Text>
      </View>
      <VectorImage
        vectorImageVector={require("../assets/vector15.png")}
        vectorIconPosition="absolute"
        vectorIconTop={0}
        vectorIconLeft={228}
      />
      <IndomieGorengCard />
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
      <WeeklyCard />
      <Pressable
        style={[styles.groupParent, styles.groupLayout]}
        onPress={() => navigation.navigate("IPhone11ProMockupLabel")}
      >
        <View style={[styles.rectangleWrapper, styles.itemShadowBox]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
        </View>
        <Text style={[styles.bulanan, styles.bulananFlexBox]}>Bulanan</Text>
      </Pressable>
      <GroupComponent8 />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Text
          style={[styles.paketMingguanGacor, styles.paketPosition]}
        >{`Paket Mingguan Gacor adalah paket yang menyediakan nasi+lauk+sayur setiap hari selama satu bulan dengan harga yang terjangkau dan pastinya lezat. `}</Text>
        <Text style={[styles.paketMingguanGacor1, styles.paketPosition]}>
          Paket Mingguan Gacor
        </Text>
      </View>
      <Image
        style={styles.jakarta210Icon}
        contentFit="cover"
        source={require("../assets/jakarta2-10.png")}
      />
      <GroupComponent9
        packageName="Paket Mingguan Gacor"
        priceText="Rp. 125.000"
        onGroupPressablePress={() => navigation.navigate("IPhone11ProX26")}
      />
      <View style={[styles.iphone11ProX25Item, styles.itemShadowBox]} />
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector17.png")}
      />
      <Pressable
        style={[styles.iconlyboldprofile, styles.vectorIcon2Position]}
        onPress={() => navigation.navigate("IPhone11ProX16")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlyboldprofile.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.iconlybolddocument, styles.vectorLayout]}
        onPress={() => navigation.navigate("IPhone11ProX10")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlybolddocument1.png")}
        />
      </Pressable>
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
  iphone11Layout: {
    width: 375,
    backgroundColor: Color.colorWhitesmoke_300,
  },
  bulananFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 44,
    width: 77,
  },
  itemShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  groupPosition: {
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  paketPosition: {
    left: 14,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  vectorIcon2Position: {
    bottom: "3.82%",
    top: "92.86%",
    height: "3.33%",
    position: "absolute",
  },
  vectorLayout: {
    height: "3.33%",
    position: "absolute",
  },
  iphone11ProX25Child: {
    height: 1155,
    left: 0,
    top: 0,
    position: "absolute",
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
    color: Color.colorBlack,
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    width: 250,
    left: 0,
    top: 0,
  },
  makananAnda: {
    top: 32,
    fontSize: FontSize.size_9xl,
    width: 238,
    height: 46,
    color: Color.colorBlack,
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    left: 0,
  },
  cariLaukUntukParent: {
    top: 44,
    left: 28,
    height: 78,
    width: 250,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_2xs,
    height: 44,
    width: 77,
  },
  rectangleWrapper: {
    shadowRadius: 10,
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    position: "absolute",
    height: 44,
    width: 77,
    left: 0,
    top: 0,
  },
  bulanan: {
    marginLeft: -28.5,
    top: 10,
    left: "50%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.jostRegular,
    color: Color.colorLightgray_300,
  },
  groupParent: {
    top: 197,
    left: 36,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 30,
    elevation: 30,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    width: 343,
    height: 317,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  paketMingguanGacor: {
    top: 247,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.beVietnam,
    color: Color.colorDarkgray_200,
    width: 300,
  },
  paketMingguanGacor1: {
    top: 219,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
  },
  rectangleParent: {
    top: 312,
    left: 16,
    width: 342,
    height: 316,
    position: "absolute",
  },
  jakarta210Icon: {
    top: 327,
    left: 43,
    borderRadius: Border.br_52xl,
    width: 287,
    height: 199,
    position: "absolute",
  },
  iphone11ProX25Item: {
    top: 724,
    left: -1,
    shadowRadius: 15,
    elevation: 15,
    height: 88,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    position: "absolute",
    width: 375,
    backgroundColor: Color.colorWhitesmoke_300,
  },
  vectorIcon2: {
    right: "81.71%",
    left: "10.93%",
    bottom: "3.82%",
    top: "92.86%",
    height: "3.33%",
    position: "absolute",
    width: "7.36%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconlyboldprofile: {
    left: "80.8%",
    right: "13.01%",
    width: "6.19%",
  },
  iconlybolddocument: {
    left: "56.53%",
    top: "92.98%",
    right: "36.51%",
    bottom: "3.69%",
    width: "6.96%",
  },
  vector: {
    left: "32.8%",
    top: "93.23%",
    right: "59.84%",
    bottom: "3.45%",
    width: "7.36%",
  },
  iphone11ProX25: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_300,
  },
});

export default IPhone11ProX25;
