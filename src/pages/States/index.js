import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Background from "../../components/Background";
import { FontAwesome } from "@expo/vector-icons";
import { Header, ListItem, Text } from "react-native-elements";
import stateIcons from "../../assets/stateIcons";
import { AdMobInterstitial } from "expo-ads-admob";

export default function States() {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    setLoading(true);
    AdMobInterstitial.setAdUnitID("ca-app-pub-2179709203572381/4279634867");
    AdMobInterstitial.setTestDeviceID("EMULATOR");
    await AdMobInterstitial.requestAdAsync({
      servePersonalizedAds: true
    });
    await AdMobInterstitial.showAdAsync();
    fetch("https://api.coronaanalytic.com/brazil").then(response => {
      response.json().then(data => {
        const result = data.values.map((state, index) => {
          return {
            id: state.uid,
            name: state.state,
            avatar_url: stateIcons[index],
            subtitle: `Suspeitos:${state.suspects} Confirmados:${state.cases} Óbitos: ${state.deaths}`,
            value: state.cases
          };
        });
        setStates(result);
        setLoading(false);
      });
    });
  }, []);

  function keyExtractor(item, index) {
    return index.toString();
  }

  function renderState({ item }) {
    return (
      <ListItem
        leftAvatar={{ source: { uri: item.avatar_url } }}
        title={item.name}
        subtitle={item.subtitle}
        bottomDivider
        badge={{
          value: item.value,
          textStyle: {
            color: "white",
            fontSize: 14
          },
          status: "error"
        }}
      />
    );
  }
  return (
    <>
      <Header
        placement="left"
        containerStyle={{
          backgroundColor: "#000"
        }}
        centerComponent={{
          text: "Estados Brasileiros",
          style: { color: "#fff", fontWeight: "bold", fontSize: 16 }
        }}
      />
      <Background>
        {loading ? (
          <View style={styles.container}>
            <Text h3 style={{ color: "#fff" }}>
              Carregando ...
            </Text>
          </View>
        ) : (
          <FlatList
            keyExtractor={keyExtractor}
            data={states}
            renderItem={renderState}
          />
        )}
      </Background>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

States.navigationOptions = {
  tabBarLabel: "Estados Brasileiros",
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome name="flag" size={20} color={tintColor} />
  )
};
