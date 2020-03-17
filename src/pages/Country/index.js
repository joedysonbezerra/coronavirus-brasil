import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { AdMobInterstitial } from "expo-ads-admob";
import LottieView from "lottie-react-native";
import corona from "../../../corona.json";
import Background from "../../components/Background";

export default function Country() {
  const [brazil, setBrazil] = useState({});
  useEffect(async () => {
    AdMobInterstitial.setAdUnitID("ca-app-pub-2179709203572381/4279634867");
    AdMobInterstitial.setTestDeviceID("EMULATOR");
    await AdMobInterstitial.requestAdAsync({
      servePersonalizedAds: true
    });
    await AdMobInterstitial.showAdAsync();
    fetch(
      "https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true"
    ).then(response => {
      response.json().then(({ infected, totalTested, testedNotInfected }) => {
        setBrazil({ infected, totalTested, testedNotInfected });
      });
    });
  }, []);
  return (
    <Background>
      <View style={styles.container}>
        <LottieView
          style={styles.corona}
          resizeMode="contain"
          source={corona}
          autoPlay
          loop
        />
        <Card title="Casos confirmados" style={{ backgroundColor: "#000" }}>
          <Text>{brazil.infected}</Text>
        </Card>
        <Card title="Casos suspeitos     ">
          <Text>{brazil.totalTested}</Text>
        </Card>
        <Card title="Casos descartados">
          <Text>{brazil.testedNotInfected}</Text>
        </Card>
        <Text style={styles.reference}>
          Dados disponibilizados pelo Ministério da saúde
        </Text>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
