import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import GroupComponent11 from "../components/GroupComponent11";
import VectorIcon from "../components/VectorIcon";
import DarkModeYES from "../components/DarkModeYES";
import DarkModeNO from "../components/DarkModeNO";
import GroupComponent12 from "../components/GroupComponent12";
import GroupComponent13 from "../components/GroupComponent13";
import GroupComponent14 from "../components/GroupComponent14";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone11ProX8 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProX8}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector21.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIcon1Position]}
        contentFit="cover"
        source={require("../assets/vector14.png")}
      />
      <View style={styles.cariLaukUntukParent}>
        <Text style={[styles.cariLaukUntuk, styles.makananAndaFlexBox]}>
          Cari Lauk Untuk
        </Text>
        <Text style={[styles.makananAnda, styles.makananAndaFlexBox]}>
          Makanan Anda !
        </Text>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/vector-4.png")}
        />
        <Text style={[styles.urutBerdasarkan, styles.makananAndaFlexBox]}>
          Urut Berdasarkan
        </Text>
        <View style={[styles.groupParent, styles.groupLayout]}>
          <Pressable
            style={styles.groupContainerPosition}
            onPress={() => navigation.navigate("IPhone11ProMockupLabel")}
          >
            <View style={[styles.rectangleWrapper, styles.groupShadowBox]}>
              <View style={[styles.groupItem, styles.groupBg]} />
            </View>
            <Text style={[styles.bulanan, styles.bulananTypo]}>Bulanan</Text>
          </Pressable>
          <View style={[styles.groupView, styles.groupShadowBox]}>
            <Pressable
              style={styles.groupContainerPosition}
              onPress={() => navigation.navigate("IPhone11ProX211")}
            >
              <View style={[styles.groupInner, styles.groupInnerLayout]} />
              <Text style={[styles.mingguan, styles.bulananTypo]}>
                Mingguan
              </Text>
            </Pressable>
            <View style={[styles.rectangleView, styles.groupInnerLayout]} />
            <Text style={[styles.langsung, styles.langsungTypo]}>Langsung</Text>
          </View>
        </View>
        <View style={[styles.vectorGroup, styles.vectorGroupPosition]}>
          <Image
            style={[styles.rectangleIcon, styles.vectorGroupPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-1.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector23.png")}
          />
          <Text style={[styles.cariLauk, styles.langsungTypo]}>
            Cari Lauk...
          </Text>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
        </View>
      </View>
      <GroupComponent11 dimensionCode={require("../assets/vector23.png")} />
      <VectorIcon />
      <Image
        style={[styles.iphone11ProX8Child, styles.vectorIcon1Position]}
        contentFit="cover"
        source={require("../assets/group-97.png")}
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
      <DarkModeYES
        notch={require("../assets/notch.png")}
        networkSignalDark={require("../assets/network-signal--dark1.png")}
        wiFiSignalDark={require("../assets/wifi-signal--dark1.png")}
        batteryDark={require("../assets/battery--dark.png")}
        indicator={require("../assets/indicator.png")}
        timeDark={require("../assets/time--dark.png")}
        darkModeYESPosition="absolute"
        darkModeYESTop={-4}
        darkModeYESRight={1}
        darkModeYESLeft={-1}
        notchIconTop={4}
        notchIconRight={-1}
        notchIconLeft={1}
        indicatorIconTop={8}
        timeDarkTop={12}
      />
      <DarkModeNO
        darkModeNOPosition="absolute"
        darkModeNORight={1}
        darkModeNOBottom={0}
        darkModeNOLeft={-1}
      />
      <GroupComponent12
        dimensionCode={require("../assets/star1.png")}
        onGroupPressablePress={() => navigation.navigate("IPhone11ProX15")}
      />
      <GroupComponent13 dimensionCode={require("../assets/star1.png")} />
      <GroupComponent14 dimensionCode={require("../assets/star1.png")} />
      <Pressable
        style={[styles.vector1, styles.vectorLayout]}
        onPress={() => navigation.navigate("IPhone11ProX24")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector2, styles.vectorPosition]}
        onPress={() => navigation.navigate("IPhone11ProX11")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon3, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon1Position: {
    left: 0,
    position: "absolute",
  },
  makananAndaFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 44,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupBg: {
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  bulananTypo: {
    color: Color.colorLightgray_300,
    fontFamily: FontFamily.jostRegular,
    fontSize: FontSize.size_mid,
    top: 10,
    textAlign: "left",
    position: "absolute",
  },
  groupInnerLayout: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_2xs,
    width: 77,
    height: 44,
    top: 0,
    position: "absolute",
  },
  langsungTypo: {
    fontFamily: FontFamily.jostRegular,
    textAlign: "left",
    position: "absolute",
  },
  vectorGroupPosition: {
    height: 49,
    width: 316,
    top: 0,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorLayout: {
    height: "3.33%",
    width: "7.33%",
    position: "absolute",
  },
  vectorPosition: {
    right: "10.27%",
    left: "82.4%",
    height: "3.33%",
    width: "7.33%",
    position: "absolute",
  },
  vectorIcon: {
    top: 382,
    left: 318,
    width: 57,
    height: 231,
    position: "absolute",
  },
  vectorIcon1: {
    top: 148,
    width: 100,
    height: 245,
  },
  cariLaukUntuk: {
    fontSize: FontSize.size_xl,
    height: 32,
    color: Color.colorBlack,
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    textAlign: "left",
    left: 0,
    top: 0,
    width: 250,
  },
  makananAnda: {
    top: 32,
    fontSize: FontSize.size_9xl,
    width: 238,
    height: 46,
    color: Color.colorBlack,
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    textAlign: "left",
    left: 0,
  },
  cariLaukUntukParent: {
    top: 42,
    height: 78,
    width: 250,
    left: 31,
    position: "absolute",
  },
  groupChild: {
    top: 130,
    left: 303,
    width: 14,
    height: 8,
    position: "absolute",
  },
  urutBerdasarkan: {
    top: 124,
    left: 207,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.beVietnam,
    color: Color.colorDarkgray_200,
  },
  groupItem: {
    borderRadius: Border.br_2xs,
    backgroundColor: Color.colorWhite,
    width: 77,
    height: 44,
    top: 0,
    position: "absolute",
  },
  rectangleWrapper: {
    width: 77,
    height: 44,
    top: 0,
    left: 0,
    position: "absolute",
  },
  bulanan: {
    marginLeft: -28.5,
    left: "50%",
  },
  groupContainerPosition: {
    width: 77,
    height: 44,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupInner: {
    borderColor: Color.colorWhite,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  mingguan: {
    left: 3,
  },
  rectangleView: {
    left: 115,
    backgroundColor: Color.colorMediumseagreen_200,
    borderColor: Color.colorMediumseagreen_200,
  },
  langsung: {
    left: 120,
    color: Color.colorWhite,
    fontSize: FontSize.size_mid,
    top: 10,
    fontFamily: FontFamily.jostRegular,
  },
  groupView: {
    left: 113,
    width: 192,
    height: 44,
    position: "absolute",
    top: 0,
  },
  groupParent: {
    top: 75,
    left: 4,
    width: 305,
  },
  rectangleIcon: {
    borderRadius: Border.br_xl,
  },
  vectorIcon2: {
    height: "42.86%",
    width: "6.99%",
    top: "28.57%",
    right: "87.34%",
    bottom: "28.57%",
    left: "5.66%",
    position: "absolute",
  },
  cariLauk: {
    top: 11,
    left: 55,
    fontSize: FontSize.size_lg,
    color: Color.colorLightgray_100,
    width: 94,
  },
  ellipseIcon: {
    top: 17,
    left: 21,
    width: 13,
    height: 12,
    position: "absolute",
  },
  vectorGroup: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  vectorParent: {
    top: 149,
    height: 140,
    width: 316,
    left: 31,
    position: "absolute",
  },
  iphone11ProX8Child: {
    top: 709,
    width: 375,
    height: 103,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "32.27%",
    top: "92.98%",
    right: "60.4%",
    bottom: "3.69%",
  },
  vector1: {
    left: "81.6%",
    top: "40.52%",
    right: "11.07%",
    bottom: "56.16%",
  },
  vector2: {
    top: "58.37%",
    bottom: "38.3%",
  },
  vectorIcon3: {
    top: "75.86%",
    bottom: "20.81%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iphone11ProX8: {
    backgroundColor: Color.colorWhitesmoke_300,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone11ProX8;
