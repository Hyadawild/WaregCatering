import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import GroupComponent11 from "../components/GroupComponent11";
import GroupComponent22 from "../components/GroupComponent22";
import VectorIcon from "../components/VectorIcon";
import DarkModeYES from "../components/DarkModeYES";
import DarkModeNO from "../components/DarkModeNO";
import GroupComponent12 from "../components/GroupComponent12";
import GroupComponent13 from "../components/GroupComponent13";
import GroupComponent14 from "../components/GroupComponent14";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone11ProX24 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProX24}>
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
        <Text style={[styles.cariLaukUntuk, styles.makananAndaTypo]}>
          Cari Lauk Untuk
        </Text>
        <Text style={[styles.makananAnda, styles.makananAndaTypo]}>
          Makanan Anda !
        </Text>
      </View>
      <GroupComponent11 dimensionCode={require("../assets/vector16.png")} />
      <GroupComponent22 />
      <VectorIcon />
      <Image
        style={[styles.iphone11ProX24Child, styles.vectorIcon1Position]}
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
        dimensionCode={require("../assets/star.png")}
        onGroupPressablePress={() => navigation.navigate("IPhone11ProX15")}
      />
      <GroupComponent13 dimensionCode={require("../assets/star.png")} />
      <GroupComponent14 dimensionCode={require("../assets/star.png")} />
      <Pressable
        style={[styles.vector1, styles.vectorLayout]}
        onPress={() => navigation.navigate("IPhone11ProX11")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector22.png")}
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
        style={[styles.vectorIcon2, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorPosition]}
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
  makananAndaTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    left: 0,
    position: "absolute",
  },
  vectorLayout: {
    height: "3.33%",
    width: "7.36%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorPosition: {
    right: "10.24%",
    left: "82.4%",
    height: "3.33%",
    width: "7.36%",
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
    top: 0,
    fontSize: FontSize.size_xl,
    height: 32,
    width: 250,
  },
  makananAnda: {
    top: 32,
    fontSize: FontSize.size_9xl,
    width: 238,
    height: 46,
  },
  cariLaukUntukParent: {
    top: 42,
    left: 31,
    height: 78,
    width: 250,
    position: "absolute",
  },
  iphone11ProX24Child: {
    top: 709,
    width: 375,
    height: 103,
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
    right: "60.37%",
    bottom: "3.69%",
  },
  vector1: {
    left: "81.6%",
    top: "40.52%",
    right: "11.04%",
    bottom: "56.16%",
  },
  vector2: {
    top: "58.37%",
    bottom: "38.3%",
  },
  vectorIcon2: {
    top: "75.86%",
    bottom: "20.81%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iphone11ProX24: {
    backgroundColor: Color.colorWhitesmoke_300,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone11ProX24;
