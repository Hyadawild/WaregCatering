import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DarkModeYES from "../components/DarkModeYES";
import GroupComponent15 from "../components/GroupComponent15";
import GroupComponent17 from "../components/GroupComponent17";
import GroupComponent16 from "../components/GroupComponent16";
import DarkModeNO from "../components/DarkModeNO";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const IPhone11ProX211 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProX21}>
      <Image
        style={styles.iphone11ProX21Child}
        contentFit="cover"
        source={require("../assets/group-116.png")}
      />
      <Image
        style={styles.iphone11ProX21Item}
        contentFit="cover"
        source={require("../assets/group-97.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("IPhone11ProX11")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <DarkModeYES
        notch={require("../assets/notch1.png")}
        networkSignalDark={require("../assets/network-signal--dark2.png")}
        wiFiSignalDark={require("../assets/wifi-signal--dark2.png")}
        batteryDark={require("../assets/battery--dark11.png")}
        indicator={require("../assets/indicator1.png")}
        timeDark={require("../assets/time--dark1.png")}
        darkModeYESPosition="absolute"
        darkModeYESTop={-4}
        darkModeYESRight={3}
        darkModeYESLeft={-2}
        notchIconTop={4}
        notchIconRight={-2}
        notchIconLeft={3}
        indicatorIconTop={8}
        timeDarkTop={12}
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
          source={require("../assets/vector-41.png")}
        />
        <Text style={[styles.urutBerdasarkan, styles.makananAndaFlexBox]}>
          Urut Berdasarkan
        </Text>
        <View style={[styles.groupParent, styles.groupLayout]}>
          <Pressable
            style={[styles.groupContainer, styles.rectangleLayout]}
            onPress={() => navigation.navigate("IPhone11ProMockupLabel")}
          >
            <View style={[styles.rectangleWrapper, styles.groupShadowBox]}>
              <View style={styles.groupItem} />
            </View>
            <Text style={[styles.bulanan, styles.bulananTypo]}>Bulanan</Text>
          </Pressable>
          <View style={[styles.groupView, styles.groupShadowBox]}>
            <Pressable
              style={[styles.rectangleParent, styles.rectangleLayout]}
              onPress={() => navigation.navigate("IPhone11ProX8")}
            >
              <View style={[styles.groupInner, styles.groupInnerLayout]} />
              <Text style={[styles.langsung, styles.bulananTypo]}>
                Langsung
              </Text>
            </Pressable>
            <View style={[styles.rectangleView, styles.groupInnerLayout]} />
            <Text style={[styles.mingguan, styles.bulananTypo]}>Mingguan</Text>
          </View>
        </View>
        <View style={[styles.vectorGroup, styles.vectorGroupPosition]}>
          <Image
            style={[styles.rectangleIcon, styles.vectorGroupPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-11.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector24.png")}
          />
          <Text style={[styles.cariLauk, styles.bulananTypo]}>
            Cari Lauk...
          </Text>
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
        </View>
      </View>
      <GroupComponent15
        jakarta24={require("../assets/jakarta2-43.png")}
        paketMingguanHemat="Paket Mingguan Hemat"
        vector2={require("../assets/vector-21.png")}
        rp100000="Rp. 100.000"
        star={require("../assets/star2.png")}
        vector={require("../assets/vector25.png")}
      />
      <GroupComponent17
        componentImageUrls={require("../assets/jakarta2-43.png")}
        packageImageUrls="Paket  Mingguan Gacor"
        imageCode={require("../assets/vector-21.png")}
        priceText="Rp. 125.000"
        dimensionCode={require("../assets/star2.png")}
        imageDimensions={require("../assets/vector25.png")}
        onGroupPressablePress={() => navigation.navigate("IPhone11ProX25")}
      />
      <GroupComponent16
        imageDimensions={require("../assets/jakarta2-43.png")}
        packageName="Paket Mingguan Ngiler"
        componentId={require("../assets/vector-21.png")}
        price="Rp. 150.000"
        dimensionCode={require("../assets/star2.png")}
        imageDimensionsText={require("../assets/vector25.png")}
      />
      <DarkModeNO
        darkModeNOPosition="absolute"
        darkModeNORight={1}
        darkModeNOBottom={0}
        darkModeNOLeft={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  makananAndaFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 44,
    position: "absolute",
  },
  rectangleLayout: {
    width: 77,
    height: 44,
    top: 0,
    position: "absolute",
  },
  groupShadowBox: {
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  bulananTypo: {
    fontFamily: FontFamily.jostRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupInnerLayout: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_2xs,
    width: 77,
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorGroupPosition: {
    height: 49,
    width: 316,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iphone11ProX21Child: {
    width: 406,
    height: 623,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iphone11ProX21Item: {
    top: 709,
    width: 375,
    height: 103,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "32.27%",
    top: "92.98%",
    right: "60.4%",
    bottom: "3.69%",
    width: "7.33%",
    height: "3.33%",
    position: "absolute",
  },
  cariLaukUntuk: {
    fontSize: FontSize.size_xl,
    height: 32,
    color: Color.colorBlack,
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    textAlign: "left",
    left: 0,
    width: 250,
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
    textAlign: "left",
    left: 0,
  },
  cariLaukUntukParent: {
    top: 42,
    left: 32,
    height: 78,
    width: 250,
    position: "absolute",
  },
  groupChild: {
    top: 136,
    left: 302,
    width: 14,
    height: 8,
    position: "absolute",
  },
  urutBerdasarkan: {
    top: 128,
    left: 205,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.beVietnam,
    color: Color.colorDarkgray_200,
  },
  groupItem: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_2xs,
    width: 77,
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleWrapper: {
    width: 77,
    height: 44,
    top: 0,
    position: "absolute",
    left: 0,
  },
  bulanan: {
    marginLeft: -28.5,
    left: "50%",
    color: "#ddd",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.jostRegular,
    top: 10,
  },
  groupContainer: {
    left: 0,
  },
  groupInner: {
    borderColor: Color.colorWhite,
    backgroundColor: Color.colorWhite,
  },
  langsung: {
    color: Color.colorLightgray_300,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.jostRegular,
    top: 10,
    left: 5,
  },
  rectangleParent: {
    left: 115,
  },
  rectangleView: {
    backgroundColor: Color.colorMediumseagreen_200,
    borderColor: "#d7c2c2",
  },
  mingguan: {
    top: 9,
    left: 2,
    color: Color.colorWhite,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.jostRegular,
  },
  groupView: {
    left: 114,
    width: 192,
    height: 44,
    position: "absolute",
    top: 0,
  },
  groupParent: {
    top: 76,
    width: 306,
    left: 5,
  },
  rectangleIcon: {
    borderRadius: Border.br_xl,
  },
  vectorIcon: {
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
    elevation: 10,
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  vectorParent: {
    top: 148,
    left: 31,
    height: 144,
    width: 316,
    position: "absolute",
  },
  iphone11ProX21: {
    backgroundColor: Color.colorWhitesmoke_300,
    shadowRadius: 4,
    elevation: 4,
    flex: 1,
    height: 812,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: "100%",
  },
});

export default IPhone11ProX211;
