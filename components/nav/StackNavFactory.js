import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Photo from "../../screens/Photo";
import Likes from "../../screens/Likes";
import Comments from "../../screens/Comments";
import Profile from "../../screens/Profile";
import Feed from "../../screens/Feed";
import Search from "../../screens/Search";
import Notifications from "../../screens/Notifications";
import Me from "../../screens/Me";
import { Image } from "react-native";

const Stack = createStackNavigator();

export default function StachNavFactory({ screenName }) {
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "black",
                    shadowColor:"rgba(255,255,255,0.3)",
                },
                headerTintColor: "white",
                headerBackTitleVisible: false,
            }}
        >
            {screenName === "Feed" ? (
                <Stack.Screen name={"Feed"} component={Feed} options={{
                    headerTitle: () => <Image style={{maxHeight:40,}} resizeMode="contain" source={require("../../assets/logo.png")} />
                }} />
            ) : null}
            {screenName === "Search" ? (
                <Stack.Screen name={"Search"} component={Search} />
            ) : null}
            {screenName === "Notifications" ? (
                <Stack.Screen name={"Notifications"} component={Notifications} />
            ) : null}
            {screenName === "Me" ? <Stack.Screen name={"Me"} component={Me} /> : null}
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Photo" component={Photo} />
            <Stack.Screen name="Likes" component={Likes} />
            <Stack.Screen name="Comments" component={Comments} />
      </Stack.Navigator>
    )
}