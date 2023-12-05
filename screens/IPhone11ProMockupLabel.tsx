import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DarkModeYES from "../components/DarkModeYES";
import GroupComponent23 from "../components/GroupComponent23";
import GroupComponent17 from "../components/GroupComponent17";
import GroupComponent15 from "../components/GroupComponent15";
import GroupComponent16 from "../components/GroupComponent16";
import DarkModeNO from "../components/DarkModeNO";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone11ProMockupLabel = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone11ProMockupLabel, styles.iconLayout]}>
      <View style={styles.iphone11ProX20}>
        <Image
          style={[styles.iphone11ProX20Child, styles.iphone11Position]}
          contentFit="cover"
          source={require("../assets/group-1161.png")}
        />
        <Image
          style={[styles.iphone11ProX20Item, styles.iphone11Position]}
          contentFit="cover"
          source={require("../assets/group-971.png")}
        />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("IPhone11ProX11")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector26.png")}
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
          darkModeYESRight={3}
          darkModeYESLeft={-2}
          notchIconTop={4}
          notchIconRight={-3}
          notchIconLeft={3}
          indicatorIconTop={8}
          timeDarkTop={12}
        />
        <View style={styles.cariLaukUntukParent}>
          <Text style={[styles.cariLaukUntuk, styles.makananAndaTypo]}>
            Cari Lauk Untuk
          </Text>
          <Text style={[styles.makananAnda, styles.makananAndaTypo]}>
            Makanan Anda !
          </Text>
        </View>
        <GroupComponent23 />
        <GroupComponent17
          componentImageUrls={require("../assets/jakarta2-44.png")}
          packageImageUrls="Paket Bulanan Hemat"
          imageCode={require("../assets/vector-2.png")}
          priceText="Rp. 375.000"
          dimensionCode={require("../assets/star1.png")}
          imageDimensions={require("../assets/vector2.png")}
          propTop={320}
          propLeft={14}
          propTop1={31}
          propLeft1={129}
          propWidth={62}
          propRight="5.91%"
          propLeft2="86.17%"
          onGroupPressablePress={() => navigation.navigate("IPhone11ProX22")}
        />
        <GroupComponent15
          jakarta24={require("../assets/jakarta2-44.png")}
          paketMingguanHemat="Paket  Bulanan Gacor"
          vector2={require("../assets/vector-2.png")}
          rp100000="Rp. 475.000"
          star={require("../assets/star1.png")}
          vector={require("../assets/vector2.png")}
          propTop={464}
          propLeft={13}
          propTop1={31}
          propLeft1={130}
          propRight="5.62%"
          propLeft2="86.46%"
        />
        <GroupComponent16
          imageDimensions={require("../assets/jakarta2-44.png")}
          packageName="Paket Bulanan  Ngiler"
          componentId={require("../assets/vector-2.png")}
          price="Rp. 550.000"
          dimensionCode={require("../assets/star1.png")}
          imageDimensionsText={require("../assets/vector2.png")}
          propTop={26}
          propLeft={127}
          propWidth={63}
        />
        <DarkModeNO
          darkModeNOPosition="absolute"
          darkModeNORight={1}
          darkModeNOBottom={0}
          darkModeNOLeft={0}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  iphone11Position: {
    left: 1,
    position: "absolute",
  },
  makananAndaTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    left: 0,
    position: "absolute",
  },
  iphone11ProX20Child: {
    width: 406,
    height: 623,
    top: 0,
  },
  iphone11ProX20Item: {
    top: 709,
    height: 103,
    width: 375,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "32.27%",
    top: "92.98%",
    right: "60.37%",
    bottom: "3.69%",
    width: "7.36%",
    height: "3.33%",
    position: "absolute",
  },
  cariLaukUntuk: {
    fontSize: FontSize.size_xl,
    height: 32,
    width: 250,
    top: 0,
  },
  makananAnda: {
    top: 32,
    fontSize: FontSize.size_9xl,
    width: 238,
    height: 46,
  },
  cariLaukUntukParent: {
    top: 42,
    left: 32,
    height: 78,
    width: 250,
    position: "absolute",
  },
  iphone11ProX20: {
    marginTop: -406,
    top: "50%",
    backgroundColor: Color.colorWhitesmoke_300,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    height: 812,
  },
  iphone11ProMockupLabel: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone11ProMockupLabel;
