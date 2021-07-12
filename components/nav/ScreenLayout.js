import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

export default function ScreenLayout({loading, children}) {
    return (
        <View style={{backgroundColor:"black",flex:1, alignItems:"center",justifyContent:"center"}}>
            {loading ? <ActivityIndicator color="white" />  : children}
            
            
            {/* <TouchableOpacity onPress={()=> logUserOut()} >
            <Text style={{color:"white"}}>Feed</Text>
            </TouchableOpacity> */}
        </View>
    );
}