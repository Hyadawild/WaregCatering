import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import VisibleNOImage from "./VisibleNOImage";
import ColorClearImage from "./ColorClearImage";

type DarkModeYESType = {
  notch?: ImageSourcePropType;
  networkSignalDark?: ImageSourcePropType;
  wiFiSignalDark?: ImageSourcePropType;
  batteryDark?: ImageSourcePropType;
  indicator?: ImageSourcePropType;
  timeDark?: ImageSourcePropType;

  /** Style props */
  darkModeYESPosition?: string;
  darkModeYESTop?: number | string;
  darkModeYESRight?: number | string;
  darkModeYESLeft?: number | string;
  notchIconTop?: number | string;
  notchIconRight?: number | string;
  notchIconLeft?: number | string;
  indicatorIconTop?: number | string;
  timeDarkTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModeYES = ({
  notch,
  networkSignalDark,
  wiFiSignalDark,
  batteryDark,
  indicator,
  timeDark,
  darkModeYESPosition,
  darkModeYESTop,
  darkModeYESRight,
  darkModeYESLeft,
  notchIconTop,
  notchIconRight,
  notchIconLeft,
  indicatorIconTop,
  timeDarkTop,
}: DarkModeYESType) => {
  const darkModeYESStyle = useMemo(() => {
    return {
      ...getStyleValue("position", darkModeYESPosition),
      ...getStyleValue("top", darkModeYESTop),
      ...getStyleValue("right", darkModeYESRight),
      ...getStyleValue("left", darkModeYESLeft),
    };
  }, [darkModeYESPosition, darkModeYESTop, darkModeYESRight, darkModeYESLeft]);

  const visibleNOIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", notchIconTop),
      ...getStyleValue("right", notchIconRight),
      ...getStyleValue("left", notchIconLeft),
    };
  }, [notchIconTop, notchIconRight, notchIconLeft]);

  const indicatorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", indicatorIconTop),
    };
  }, [indicatorIconTop]);

  const colorClearIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", timeDarkTop),
    };
  }, [timeDarkTop]);

  return (
    <View style={[styles.darkModeyes, darkModeYESStyle]}>
      <VisibleNOImage
        visibleNOImageVisibleNO={require("../assets/notch.png")}
        visibleNOIconPosition="absolute"
        visibleNOIconTop={0}
        visibleNOIconRight={0}
        visibleNOIconLeft={0}
        visibleNOIconMaxWidth="100%"
        visibleNOIconOverflow="hidden"
      />
      <View style={styles.statusIcons}>
        <Image
          style={styles.networkSignalDark}
          contentFit="cover"
          source={networkSignalDark}
        />
        <Image
          style={styles.wifiSignalDark}
          contentFit="cover"
          source={wiFiSignalDark}
        />
        <Image
          style={styles.batteryDark}
          contentFit="cover"
          source={batteryDark}
        />
      </View>
      <Image
        style={[styles.indicatorIcon, indicatorIconStyle]}
        contentFit="cover"
        source={indicator}
      />
      <ColorClearImage
        colorClearImageColorClear={require("../assets/colorclear.png")}
        colorClearIconPosition="absolute"
        colorClearIconTop={12}
        colorClearIconLeft={21}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  networkSignalDark: {
    width: 20,
    height: 14,
  },
  wifiSignalDark: {
    width: 16,
    marginLeft: 4,
    height: 14,
  },
  batteryDark: {
    width: 25,
    height: 12,
    marginLeft: 4,
  },
  statusIcons: {
    top: 16,
    right: 14,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  darkModeyes: {
    height: 44,
    overflow: "hidden",
  },
});

export default DarkModeYES;
