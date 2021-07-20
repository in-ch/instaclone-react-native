import React from "react";
import useMe from "../hooks/useMe";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav"

const Stack = createStackNavigator();

export default function LoggedInNav() {
  const {data} = useMe();
  return (
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="Tabs" component={TabsNav} />
        <Stack.Screen name="UploadNav" component={UploadNav} />
      </Stack.Navigator>
  );
}