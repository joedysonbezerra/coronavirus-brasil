import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Country from "./pages/Country";
import States from "./pages/States";

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Country,
      States
    },
    {
      tabBarOptions: {
        keyboardHidesTabBar: true,
        activeTintColor: "#000",
        inactiveTintColor: "#c1c1c1",
        labelStyle: {
          fontSize: 11.5,
          fontWeight: "bold"
        },

        style: {
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }
      }
    }
  )
);

export default createAppContainer(Routes);
