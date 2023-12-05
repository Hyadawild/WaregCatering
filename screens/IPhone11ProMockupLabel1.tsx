import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import DarkModeYES from "../components/DarkModeYES";
import Frame from "../components/Frame";
import { Color } from "../GlobalStyles";

const IPhone11ProMockupLabel1 = () => {
  return (
    <View style={styles.iphone11ProMockupLabel}>
      <View style={styles.iphone11ProX1}>
        <View style={[styles.frame, styles.frameLayout]}>
          <View style={[styles.frame1, styles.frameLayout]}>
            <Image
              style={[
                styles.takashiMiyazakiXqulc3imelaUIcon,
                styles.frame2Position,
              ]}
              contentFit="cover"
              source={require("../assets/takashimiyazakixqulc3imelaunsplash-1.png")}
            />
          </View>
          <View style={[styles.frame2, styles.frame2Position]}>
            <DarkModeYES
              notch={require("../assets/notch2.png")}
              networkSignalDark={require("../assets/network-signal--dark4.png")}
              wiFiSignalDark={require("../assets/wifi-signal--dark4.png")}
              batteryDark={require("../assets/battery--dark3.png")}
              indicator={require("../assets/indicator2.png")}
              timeDark={require("../assets/time--dark3.png")}
              darkModeYESPosition="absolute"
              darkModeYESTop={0}
              darkModeYESRight={6}
              darkModeYESLeft={0}
              notchIconTop={0}
              notchIconRight={-3}
              notchIconLeft={3}
              indicatorIconTop={8}
              timeDarkTop={12}
            />
          </View>
        </View>
        <Frame />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 699,
    height: 919,
    position: "absolute",
    overflow: "hidden",
  },
  frame2Position: {
    top: 107,
    position: "absolute",
  },
  takashiMiyazakiXqulc3imelaUIcon: {
    left: 162,
    width: 670,
    height: 919,
  },
  frame1: {
    left: 0,
    height: 919,
    top: 0,
  },
  frame2: {
    left: 159,
    width: 381,
    height: 44,
    overflow: "hidden",
  },
  frame: {
    top: -107,
    left: -162,
    height: 919,
  },
  iphone11ProX1: {
    left: 3,
    width: 375,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
  iphone11ProMockupLabel: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone11ProMockupLabel1;
