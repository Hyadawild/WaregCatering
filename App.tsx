const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone11ProX6 from "./screens/IPhone11ProX6";
import IPhone11ProX11 from "./screens/IPhone11ProX11";
import DarkModeYES from "./components/DarkModeYES";
import VisibleNOImage from "./components/VisibleNOImage";
import ColorClearImage from "./components/ColorClearImage";
import DarkModeNO from "./components/DarkModeNO";
import VectorImage from "./components/VectorImage";
import IPhone11ProMockupLabel1 from "./screens/IPhone11ProMockupLabel1";
import IPhone11ProMockupBuatAkun from "./screens/IPhone11ProMockupBuatAkun";
import IPhone11ProMockupSelamatD from "./screens/IPhone11ProMockupSelamatD";
import IPhone11ProMockupLabel from "./screens/IPhone11ProMockupLabel";
import IPhone11ProX211 from "./screens/IPhone11ProX211";
import IPhone11ProX8 from "./screens/IPhone11ProX8";
import IPhone11ProX24 from "./screens/IPhone11ProX24";
import IPhone11ProX10 from "./screens/IPhone11ProX10";
import IPhone11ProX15 from "./screens/IPhone11ProX15";
import IPhone11ProX22 from "./screens/IPhone11ProX22";
import IPhone11ProX25 from "./screens/IPhone11ProX25";
import IPhone11ProX13 from "./screens/IPhone11ProX13";
import IPhone11ProX23 from "./screens/IPhone11ProX23";
import IPhone11ProX26 from "./screens/IPhone11ProX26";
import IPhone11ProX14 from "./screens/IPhone11ProX14";
import IPhone11ProX28 from "./screens/IPhone11ProX28";
import IPhone11ProX27 from "./screens/IPhone11ProX27";
import IPhone11ProX12 from "./screens/IPhone11ProX12";
import IPhone11ProX16 from "./screens/IPhone11ProX16";
import IPhone11ProX21 from "./screens/IPhone11ProX21";
import IPhone11ProX29 from "./screens/IPhone11ProX29";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Biryani-Regular": require("./assets/fonts/Biryani-Regular.ttf"),
    "Biryani-SemiBold": require("./assets/fonts/Biryani-SemiBold.ttf"),
    "Biryani-Bold": require("./assets/fonts/Biryani-Bold.ttf"),
    "Biryani-ExtraBold": require("./assets/fonts/Biryani-ExtraBold.ttf"),
    "Jost-Regular": require("./assets/fonts/Jost-Regular.ttf"),
    "TitilliumWeb-Regular": require("./assets/fonts/TitilliumWeb-Regular.ttf"),
    "JosefinSans-Regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
    "JosefinSans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
    "LexendDeca-Regular": require("./assets/fonts/LexendDeca-Regular.ttf"),
    "Ubuntu-Bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone11ProX6"
              component={IPhone11ProX6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX11"
              component={IPhone11ProX11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMockupLabel1"
              component={IPhone11ProMockupLabel1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMockupBuatAkun"
              component={IPhone11ProMockupBuatAkun}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMockupSelamatD"
              component={IPhone11ProMockupSelamatD}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProMockupLabel"
              component={IPhone11ProMockupLabel}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX211"
              component={IPhone11ProX211}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX8"
              component={IPhone11ProX8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX24"
              component={IPhone11ProX24}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX10"
              component={IPhone11ProX10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX15"
              component={IPhone11ProX15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX22"
              component={IPhone11ProX22}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX25"
              component={IPhone11ProX25}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX13"
              component={IPhone11ProX13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX23"
              component={IPhone11ProX23}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX26"
              component={IPhone11ProX26}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX14"
              component={IPhone11ProX14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX28"
              component={IPhone11ProX28}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX27"
              component={IPhone11ProX27}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX12"
              component={IPhone11ProX12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX16"
              component={IPhone11ProX16}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX21"
              component={IPhone11ProX21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IPhone11ProX29"
              component={IPhone11ProX29}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
