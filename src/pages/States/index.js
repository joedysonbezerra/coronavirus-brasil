import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Background from "../../components/Background";
import { FontAwesome } from "@expo/vector-icons";
import { Header } from "react-native-elements";
import { ListItem } from "react-native-elements";

const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman"
  }
];

// import { Container } from './styles';

export default function States() {
  return (
    <>
      <Header
        placement="left"
        containerStyle={{
          backgroundColor: "#000"
        }}
        centerComponent={{
          text: "Total de casos no Brasil",
          style: { color: "#fff", fontWeight: "bold", fontSize: 16 }
        }}
      />
      <Background>
        <SafeAreaView style={styles.container}>
          {list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
            />
          ))}
        </SafeAreaView>
      </Background>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

States.navigationOptions = {
  tabBarLabel: "Estados Brasileiros",
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome name="flag" size={20} color={tintColor} />
  )
};
