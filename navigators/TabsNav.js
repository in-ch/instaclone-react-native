import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Image } from "react-native";
import StackNavFactory from "../components/nav/StackNavFactory";
import useMe from "../hooks/useMe";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

export default function TabsNav() {
  const {data} = useMe();
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        showLabel: false, // name 보여줄지 말지
        style: {
          borderTopColor: "rgba(255, 255, 255, 0.3)",
          backgroundColor: "black",
        },
      }}
    >
      <Tabs.Screen
        name="Feed"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="home" color={color} size={focused ? 24 : 20} />
          ),
        }}
      >
          {() => <StackNavFactory screenName="Feed" />}
      </Tabs.Screen>

      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="search" color={color} size={focused ? 24 : 20} />
          ),
        }}
      >
          {() => <StackNavFactory screenName="Search" />}
      </Tabs.Screen>

      <Tabs.Screen
        name="Camera"
        component={View}
        listeners={({navigation})=>{
            return {
                tabPress: (e) => {
                    e.preventDefault();
                    navigation.navigate("UploadNav");
                }
            }
        }}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="camera-outline" color={color} size={focused ? 24 : 20} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name="heart" color={color} size={focused ? 24 : 20} />
          ),
        }}
      >
          {() => <StackNavFactory screenName="Notifications" />}
      </Tabs.Screen>

      <Tabs.Screen
        name="Me"
        options={{
          tabBarIcon: ({ focused, color, size }) =>
          data?.me?.avatar ? (
            <Image
                source={{ uri: data.me.avatar }}
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  ...(focused && { borderColor: "white", borderWidth: 1 }),   // focus하면 적용되는 코드임. 
                }}
              />
            ) : (
              <TabIcon iconName={"person"} color={color} focused={focused} />
            ),
        }}
      >
          {() => <StackNavFactory screenName="Me" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}