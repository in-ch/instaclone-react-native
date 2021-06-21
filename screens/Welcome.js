import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function Welcome(props) {
    return ( 
        <View>
            <Text>Welcome</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("CreateAccount")}>
                <View>
                    <Text>Go to Create Accout</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("LogIn")}>
                <View>
                    <Text>Go to logIn</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

