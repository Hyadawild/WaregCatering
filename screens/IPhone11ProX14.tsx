import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import FormSection from "../components/FormSection";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DarkModeYES from "../components/DarkModeYES";
import DarkModeNO from "../components/DarkModeNO";
import SectionCardFormFilter from "../components/SectionCardFormFilter";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone11ProX14 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProX14}>
      <View
        style={[styles.iphone11ProX14Child, styles.rectangleParentPosition]}
      />
      <Text style={[styles.keranjang, styles.keranjangTypo]}>Keranjang</Text>
      <Text style={[styles.informasiPemesanan, styles.keranjangTypo]}>
        Informasi Pemesanan
      </Text>
      <Image
        style={[styles.iphone11ProX14Item, styles.iphone11Layout]}
        contentFit="cover"
        source={require("../assets/group-59.png")}
      />
      <Image
        style={[styles.iphone11ProX14Inner, styles.iphone11Layout]}
        contentFit="cover"
        source={require("../assets/group-60.png")}
      />
      <View style={[styles.rectangleView, styles.rectanglePosition]} />
      <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <Text style={[styles.ubah, styles.ubahTypo]}>Ubah</Text>
        <Text style={[styles.rumahNo12Gg, styles.rumahNo12GgTypo]}>
          Rumah No.12, Gg. Melati, Jl.Kaliurang
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <Text style={[styles.sayurnyaYangBanyak, styles.rumahNo12GgTypo]}>
          Sayurnya yang banyak ya
        </Text>
        <Text style={[styles.ubah1, styles.ubahTypo]}>Ubah</Text>
      </View>
      <FormSection />
      <View style={[styles.iphone11ProX14Child1, styles.childPosition]} />
      <Text style={[styles.keranjang1, styles.keranjangTypo]}>Keranjang</Text>
      <Pressable
        style={[styles.iphone11ProX14Inner, styles.iphone11Layout]}
        onPress={() => navigation.navigate("IPhone11ProX13")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-64.png")}
        />
      </Pressable>
      <View
        style={[styles.iphone11ProX14Child2, styles.iphone11ChildPosition]}
      />
      <Text style={[styles.totalPesanan, styles.rp150kTypo]}>
        Total Pesanan
      </Text>
      <Text
        style={[styles.jumlahItem, styles.rp150kTypo]}
      >{`Jumlah Item     `}</Text>
      <Text style={[styles.rp150k, styles.rp150kTypo]}>Rp. 150K</Text>
      <Text style={[styles.item, styles.itemTypo]}>15 Item</Text>
      <View style={styles.rectanglePressableShadowBox} />
      <Text style={[styles.pesanSekarang, styles.pesanTypo]}>
        Pesan Sekarang
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <View
        style={[styles.iphone11ProX14Child4, styles.iphone11ChildPosition]}
      />
      <Text style={[styles.totalPesanan, styles.rp150kTypo]}>
        Total Pembayaran
      </Text>
      <Text style={[styles.jumlahItem, styles.rp150kTypo]}>Jumlah</Text>
      <Text style={[styles.rp150k, styles.rp150kTypo]}>Rp. 14.000</Text>
      <Text style={[styles.item1, styles.itemTypo]}>1 Item</Text>
      <Pressable
        style={styles.rectanglePressableShadowBox}
        onPress={() => navigation.navigate("IPhone11ProX6")}
      />
      <Text style={[styles.pesanSekarang1, styles.pesanTypo]}>
        Pesan Sekarang
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <DarkModeYES
        notch={require("../assets/notch.png")}
        networkSignalDark={require("../assets/network-signal--dark1.png")}
        wiFiSignalDark={require("../assets/wifi-signal--dark1.png")}
        batteryDark={require("../assets/battery--dark.png")}
        indicator={require("../assets/indicator.png")}
        timeDark={require("../assets/time--dark.png")}
        darkModeYESPosition="absolute"
        darkModeYESTop={-1}
        darkModeYESRight={1}
        darkModeYESLeft={-1}
        notchIconTop={1}
        notchIconRight={-1}
        notchIconLeft={1}
        indicatorIconTop={8}
        timeDarkTop={12}
      />
      <DarkModeNO
        darkModeNOPosition="absolute"
        darkModeNORight={0}
        darkModeNOBottom={0}
        darkModeNOLeft={0}
      />
      <Text
        style={[styles.daftarPemesanan, styles.keranjangTypo]}
      >{`Daftar Pemesanan `}</Text>
      <SectionCardFormFilter
        packageDescription="Nasi + Ayam + Sayur"
        priceText="Rp. 14.000"
        itemImageUrl={require("../assets/jakarta2-21.png")}
        propTop={345}
        propLeft={0}
        propLeft1={0}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleParentPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  keranjangTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.biryaniBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  iphone11Layout: {
    height: 56,
    width: 56,
    position: "absolute",
  },
  rectanglePosition: {
    top: 201,
    height: 39,
    width: 375,
    left: 0,
    position: "absolute",
  },
  childPosition: {
    top: 0,
    width: 375,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  ubahTypo: {
    width: 36,
    color: Color.colorTurquoise,
    fontFamily: FontFamily.biryaniRegular,
    fontSize: FontSize.size_smi,
    left: 323,
    height: 24,
    textAlign: "left",
    position: "absolute",
  },
  rumahNo12GgTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.biryaniRegular,
    fontSize: FontSize.size_smi,
    top: 9,
    left: 23,
    textAlign: "left",
    position: "absolute",
  },
  iphone11ChildPosition: {
    height: 184,
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    left: -1,
    top: 628,
    width: 375,
    position: "absolute",
  },
  rp150kTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.beVietnam,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  itemTypo: {
    height: 17,
    width: 51,
    color: Color.colorWhite,
    fontFamily: FontFamily.beVietnam,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  pesanTypo: {
    fontFamily: FontFamily.biryaniSemiBold,
    top: 746,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  iphone11ProX14Child: {
    top: 19,
    height: 80,
    backgroundColor: Color.colorWhite,
  },
  keranjang: {
    top: 46,
    left: 141,
    color: Color.colorBlack,
    fontFamily: FontFamily.biryaniBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  informasiPemesanan: {
    top: 116,
    left: 23,
  },
  iphone11ProX14Item: {
    top: 33,
    left: 307,
  },
  iphone11ProX14Inner: {
    top: 34,
    left: 13,
  },
  rectangleView: {
    height: 39,
    backgroundColor: Color.colorWhite,
  },
  groupChild: {
    height: 39,
  },
  ubah: {
    height: 24,
    top: 9,
    width: 36,
    color: Color.colorTurquoise,
    fontFamily: FontFamily.biryaniRegular,
    fontSize: FontSize.size_smi,
    left: 323,
  },
  rumahNo12Gg: {
    width: 247,
    height: 26,
  },
  rectangleParent: {
    top: 155,
    height: 39,
  },
  sayurnyaYangBanyak: {
    width: 185,
    height: 24,
  },
  ubah1: {
    top: 7,
    height: 24,
  },
  rectangleGroup: {
    height: 39,
  },
  iphone11ProX14Child1: {
    height: 99,
  },
  keranjang1: {
    top: 48,
    left: 141,
    color: Color.colorBlack,
    fontFamily: FontFamily.biryaniBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iphone11ProX14Child2: {
    backgroundColor: Color.colorLimegreen_100,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    height: 184,
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    left: -1,
    top: 628,
  },
  totalPesanan: {
    top: 684,
    left: 23,
  },
  jumlahItem: {
    top: 653,
    left: 23,
  },
  rp150k: {
    top: 687,
    left: 291,
  },
  item: {
    left: 299,
    top: 653,
  },
  rectanglePressableShadowBox: {
    height: 49,
    width: 302,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    left: 32,
    top: 733,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  pesanSekarang: {
    left: 127,
  },
  vectorIcon: {
    top: 632,
    left: 167,
    width: 34,
    height: 3,
    position: "absolute",
  },
  iphone11ProX14Child4: {
    backgroundColor: Color.colorMediumseagreen_100,
    height: 184,
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    left: -1,
    top: 628,
  },
  item1: {
    top: 654,
    left: 290,
  },
  pesanSekarang1: {
    left: 132,
  },
  daftarPemesanan: {
    top: 313,
    left: 19,
  },
  iphone11ProX14: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone11ProX14;
