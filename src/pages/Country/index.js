import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AdMobInterstitial } from "expo-ads-admob";
import LottieView from "lottie-react-native";
import corona from "../../../corona.json";
import Background from "../../components/Background";
import { Header } from "react-native-elements";
// import { Container } from './styles';

export default function Country() {
  useEffect(async () => {
    //ca-app-pub-2179709203572381/4279634867
    AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1033173712"); // Test ID, Replace with your-admob-unit-id
    AdMobInterstitial.setTestDeviceID("EMULATOR");
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  });
  return (
    <>
      <Header
        placement="left"
        containerStyle={{
          backgroundColor: "#fff"
        }}
        centerComponent={{
          text: "Total de casos no Brasil",
          style: { color: "#000", fontWeight: "bold", fontSize: 16 }
        }}
      />
      <Background>
        <View style={styles.container}>
          <Text style={styles.reference}>
            Dados disponibilizados pelo Ministério da saúde
          </Text>
          <LottieView
            style={styles.corona}
            resizeMode="contain"
            source={corona}
            autoPlay
            loop
          />
        </View>
      </Background>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  reference: {
    marginTop: 10,
    marginBottom: 30,
    color: "#f8f8f8",
    fontStyle: "italic"
  },
  corona: {
    width: 200,
    height: 200
  }
});

Country.navigationOptions = {
  tabBarLabel: "Brasil",
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome name="globe" size={20} color={tintColor} />
  )
};
