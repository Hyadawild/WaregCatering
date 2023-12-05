import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DarkModeYES from "../components/DarkModeYES";
import DarkModeNO from "../components/DarkModeNO";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const IPhone11ProX10 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProX10}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <Pressable
          style={[styles.groupChild, styles.groupShadowBox]}
          onPress={() => navigation.navigate("IPhone11ProX12")}
        />
        <Text style={[styles.item, styles.itemFlexBox]}>1 Item</Text>
        <Text style={styles.januari}>{`Januari `}</Text>
        <Text
          style={[styles.januari2023, styles.januariTypo]}
        >{`18 Januari 2023 `}</Text>
        <Text style={styles.item1}>2 item</Text>
        <Image
          style={[styles.angleArrowRight, styles.angleLayout]}
          contentFit="cover"
          source={require("../assets/angle-arrow-right.png")}
        />
      </View>
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector20.png")}
      />
      <Text style={[styles.riwayat, styles.itemFlexBox]}>Riwayat</Text>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.itemPosition]} />
        <View style={styles.itemParent}>
          <Text style={[styles.item2, styles.itemPosition]}>1 Item</Text>
          <Text
            style={[styles.januari20231, styles.januariTypo]}
          >{`20 Januari 2023 `}</Text>
        </View>
        <Image
          style={[styles.angleArrowRight1, styles.angleLayout]}
          contentFit="cover"
          source={require("../assets/angle-arrow-right.png")}
        />
      </View>
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
      <Image
        style={styles.iphone11ProX10Child}
        contentFit="cover"
        source={require("../assets/group-92.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("IPhone11ProX11")}
      >
        <Image
          style={styles.icon}
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
  rectangleLayout: {
    width: 342,
    position: "absolute",
  },
  groupShadowBox: {
    height: 50,
    width: 343,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
  },
  itemFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  januariTypo: {
    width: 133,
    color: Color.colorDarkgray_200,
    fontWeight: "300",
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.beVietnam,
    position: "absolute",
  },
  angleLayout: {
    height: 15,
    width: 15,
    overflow: "hidden",
    position: "absolute",
  },
  itemPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  vectorIcon: {
    top: 144,
    left: 246,
    width: 129,
    height: 286,
    position: "absolute",
  },
  groupChild: {
    top: 53,
    left: 0,
    position: "absolute",
  },
  item: {
    top: 54,
    width: 185,
    fontFamily: FontFamily.beVietnam,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    left: 14,
    position: "absolute",
  },
  januari: {
    left: 6,
    top: 0,
    width: 185,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.beVietnam,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  januari2023: {
    top: 78,
    left: 14,
  },
  item1: {
    top: 26,
    width: 43,
    color: Color.colorDarkgray_200,
    fontWeight: "300",
    fontSize: FontSize.size_2xs,
    left: 6,
    textAlign: "left",
    fontFamily: FontFamily.beVietnam,
    position: "absolute",
  },
  angleArrowRight: {
    top: 70,
    left: 310,
    overflow: "hidden",
  },
  rectangleParent: {
    top: 128,
    left: 17,
    height: 102,
  },
  vectorIcon1: {
    top: 330,
    width: 121,
    height: 279,
    left: 0,
    position: "absolute",
  },
  riwayat: {
    top: 63,
    left: 137,
    fontSize: FontSize.size_5xl,
    fontWeight: "800",
    fontFamily: FontFamily.biryaniExtraBold,
    position: "absolute",
  },
  groupItem: {
    height: 50,
    width: 343,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
  },
  item2: {
    width: 185,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.beVietnam,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
  },
  januari20231: {
    top: 24,
    left: 0,
  },
  itemParent: {
    top: 3,
    height: 40,
    width: 185,
    left: 14,
    position: "absolute",
  },
  angleArrowRight1: {
    top: 17,
    left: 313,
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 264,
    left: 15,
    height: 49,
  },
  iphone11ProX10Child: {
    top: 709,
    width: 375,
    height: 103,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "33.07%",
    top: "92.98%",
    right: "59.57%",
    bottom: "3.69%",
    width: "7.36%",
    height: "3.33%",
    position: "absolute",
  },
  iphone11ProX10: {
    backgroundColor: Color.colorWhitesmoke_300,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default IPhone11ProX10;
