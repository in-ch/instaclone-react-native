import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function CreateAccount(props) {
    return (
        <View>
            <Text>CreateAccount</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("LogIn")}>
                <View>
                    <Text>Go to logIn</Text>
                </View>
            </TouchableOpacity>
        </View>
        
    )
};

