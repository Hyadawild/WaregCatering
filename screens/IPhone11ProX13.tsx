import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import SectionCardFormFilter from "../components/SectionCardFormFilter";
import SectionCardFormFilter1 from "../components/SectionCardFormFilter1";
import DarkModeYES from "../components/DarkModeYES";
import DarkModeNO from "../components/DarkModeNO";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone11ProX13 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone11ProX13}>
      <View style={[styles.iphone11ProX13Child, styles.iphone11Position1]} />
      <Text style={styles.nomorMeja}>Nomor Meja</Text>
      <View style={[styles.iphone11ProX13Item, styles.iphone11Position1]} />
      <Text style={styles.keranjang}>Keranjang</Text>
      <View style={[styles.iphone11ProX13Inner, styles.iphone11Position]} />
      <Text style={[styles.totalPesanan, styles.rp150kTypo]}>
        Total Pesanan
      </Text>
      <Text style={styles.jumlahItem}>{`Jumlah Item     `}</Text>
      <Text style={[styles.rp150k, styles.rp150kTypo]}>Rp. 150K</Text>
      <Text style={[styles.item, styles.itemTypo]}>15 Item</Text>
      <View style={styles.rectangleViewShadowBox} />
      <Text
        style={[styles.daftarPemesanan, styles.pemesananTypo]}
      >{`Daftar Pemesanan `}</Text>
      <Text style={[styles.informasiPemesanan, styles.pemesananTypo]}>
        Informasi Pemesanan
      </Text>
      <Text style={[styles.pesanSekarang, styles.pesanTypo]}>
        Pesan Sekarang
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-591.png")}
      />
      <Image
        style={[styles.iphone11ProX13Child1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-601.png")}
      />
      <View style={[styles.iphone11ProX13Child2, styles.groupChildLayout]} />
      <View style={[styles.iphone11ProX13Child2, styles.groupChildLayout]} />
      <Pressable
        style={[styles.iphone11ProX13Child2, styles.groupChildLayout]}
        onPress={() => navigation.navigate("IPhone11ProX14")}
      />
      <SectionCardFormFilter
        packageDescription="Nasi + Ayam + Sayur"
        priceText="Rp. 14.000"
        itemImageUrl={require("../assets/jakarta2-21.png")}
        propTop={349}
        propLeft={-1}
        propLeft1={1}
      />
      <View style={[styles.iphone11ProX13Child4, styles.iphone11Position]} />
      <Text style={[styles.totalPesanan, styles.rp150kTypo]}>
        Total Pembayaran
      </Text>
      <Text style={styles.jumlahItem}>Jumlah</Text>
      <Text style={[styles.rp150k, styles.rp150kTypo]}>Rp. 14.000</Text>
      <Text style={[styles.item1, styles.itemTypo]}>1 Item</Text>
      <Pressable
        style={styles.rectangleViewShadowBox}
        onPress={() => navigation.navigate("IPhone11ProX6")}
      />
      <Text style={[styles.pesanSekarang1, styles.pesanTypo]}>
        {" "}
        Pesan Sekarang
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <SectionCardFormFilter1
        dimensionCode={require("../assets/group-641.png")}
        onGroupPressablePress={() => navigation.navigate("IPhone11ProX15")}
      />
      <DarkModeYES
        notch={require("../assets/notch.png")}
        networkSignalDark={require("../assets/network-signal--dark1.png")}
        wiFiSignalDark={require("../assets/wifi-signal--dark1.png")}
        batteryDark={require("../assets/battery--dark.png")}
        indicator={require("../assets/indicator.png")}
        timeDark={require("../assets/time--dark.png")}
        darkModeYESPosition="absolute"
        darkModeYESTop={-2}
        darkModeYESRight={0}
        darkModeYESLeft={0}
        notchIconTop={2}
        notchIconRight={0}
        notchIconLeft={0}
        indicatorIconTop={8}
        timeDarkTop={12}
      />
      <Image
        style={[styles.angleArrowRight, styles.angleLayout]}
        contentFit="cover"
        source={require("../assets/angle-arrow-right1.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("IPhone11ProX14")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.catatan, styles.catatanPosition]}>Catatan</Text>
        <Image
          style={[styles.angleArrowRight1, styles.angleLayout]}
          contentFit="cover"
          source={require("../assets/angle-arrow-right2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupChildLayout]}
        onPress={() => navigation.navigate("IPhone11ProX14")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.metodePembayaran, styles.catatanPosition]}>
          Metode Pembayaran
        </Text>
        <Image
          style={[styles.angleArrowRight1, styles.angleLayout]}
          contentFit="cover"
          source={require("../assets/angle-arrow-right2.png")}
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
  iphone11Position1: {
    width: 375,
    left: 0,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  iphone11Position: {
    height: 184,
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    left: 2,
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
    top: 653,
    color: Color.colorWhite,
    fontFamily: FontFamily.beVietnam,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  pemesananTypo: {
    left: 18,
    color: Color.colorBlack,
    fontFamily: FontFamily.biryaniBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  pesanTypo: {
    fontFamily: FontFamily.biryaniSemiBold,
    top: 746,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  groupIconLayout: {
    height: 56,
    width: 56,
    position: "absolute",
  },
  groupChildLayout: {
    height: 39,
    width: 375,
    left: 0,
    position: "absolute",
  },
  angleLayout: {
    height: 15,
    width: 15,
    left: 337,
    position: "absolute",
    overflow: "hidden",
  },
  catatanPosition: {
    top: 10,
    height: 24,
    textAlign: "left",
    color: Color.colorTurquoise,
    fontFamily: FontFamily.biryaniRegular,
    fontSize: FontSize.size_smi,
    left: 23,
    position: "absolute",
  },
  iphone11ProX13Child: {
    height: 32,
    top: 155,
  },
  nomorMeja: {
    top: 162,
    width: 89,
    height: 24,
    textAlign: "left",
    color: Color.colorTurquoise,
    fontFamily: FontFamily.biryaniRegular,
    fontSize: FontSize.size_smi,
    left: 23,
    position: "absolute",
  },
  iphone11ProX13Item: {
    top: 21,
    height: 80,
  },
  keranjang: {
    top: 48,
    left: 141,
    color: Color.colorBlack,
    fontFamily: FontFamily.biryaniBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  iphone11ProX13Inner: {
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
    left: 2,
    top: 628,
  },
  totalPesanan: {
    top: 684,
    left: 26,
    fontFamily: FontFamily.beVietnam,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  jumlahItem: {
    top: 653,
    color: Color.colorWhite,
    fontFamily: FontFamily.beVietnam,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    left: 26,
    textAlign: "left",
    position: "absolute",
  },
  rp150k: {
    top: 687,
    left: 294,
  },
  item: {
    left: 302,
  },
  rectangleViewShadowBox: {
    height: 49,
    width: 302,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    left: 35,
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
  daftarPemesanan: {
    top: 312,
  },
  informasiPemesanan: {
    top: 117,
  },
  pesanSekarang: {
    left: 130,
  },
  vectorIcon: {
    top: 632,
    left: 170,
    width: 34,
    height: 3,
    position: "absolute",
  },
  groupIcon: {
    top: 35,
    left: 307,
  },
  iphone11ProX13Child1: {
    left: 13,
    top: 15,
  },
  iphone11ProX13Child2: {
    backgroundColor: Color.colorWhite,
    height: 39,
    top: 155,
  },
  iphone11ProX13Child4: {
    backgroundColor: Color.colorMediumseagreen_100,
    height: 184,
    borderTopRightRadius: Border.br_11xl,
    borderTopLeftRadius: Border.br_11xl,
    left: 2,
    top: 628,
  },
  item1: {
    left: 294,
  },
  pesanSekarang1: {
    marginLeft: -56.5,
    left: "50%",
  },
  angleArrowRight: {
    top: 169,
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.colorWhite,
    height: 39,
  },
  catatan: {
    width: 56,
    top: 10,
  },
  angleArrowRight1: {
    top: 15,
  },
  rectangleParent: {
    top: 200,
  },
  metodePembayaran: {
    width: 148,
  },
  rectangleGroup: {
    top: 246,
  },
  iphone11ProX13: {
    backgroundColor: Color.colorWhitesmoke_200,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default IPhone11ProX13;
