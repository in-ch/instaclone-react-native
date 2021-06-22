import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import CreateAccount from "../screens/CreateAccount";
import LogIn from "../screens/LogIn";

const Stack = createStackNavigator();

export default function LoggedOutNav(){
    return (
        <Stack.Navigator initialRouteName="Welcome" headerMod="float" screenOptions={{  //options 전역변수 같은 느낌..
            headerBackTitleVisible: false, // 뒤로가기에 이름 붙이는 거 
            headerShown: false, // 헤더가 보이는 지 안 보이는 지
            headerTintColor: "black", // 헤더 화살표 색상
        }}>
            <Stack.Screen name="Welcome" options={{
                title: "instagram",
            }}
            component={Welcome} />
            <Stack.Screen name="CreateAccount"  options={{headerShown: true, headerTitle:false,headerTransparent: true, headerTintColor:"white"}} component={CreateAccount} />
            <Stack.Screen name="LogIn" component={LogIn} />
        </Stack.Navigator>
    )
}