import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SelectPhoto from "../screens/SelectPhoto";
import TakePhoto from "../screens/TakePhoto";
import { createStackNavigator } from "@react-navigation/stack";
import {Ionicons} from "@expo/vector-icons";
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function UploadNav() {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBarOptions={{
        style: {
          backgroundColor: "black",
        },
        activeTintColor: "white",
        indicatorStyle: {
          backgroundColor: "white",
          top: 0,
        },
      }}
    >
      <Tab.Screen name="Select">
        {() => (
          <Stack.Navigator screenOptions={{
            headerTintColor:"white",
            headerBackTitleVisible: false,
            headerBackImage: ({tintColor}) => <Ionicons color={tintColor} name="close" size={28} />,
            headerStyle: {
              backgroundColor: "black",
              shadowOpacity: 0.5,
            }
          }}>
            <Stack.Screen name="Select" options={{title: "사진 선택"}} component={SelectPhoto} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Take" component={TakePhoto} />
    </Tab.Navigator>
  );
}