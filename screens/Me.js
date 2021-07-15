import React from "react";
import { Text, View } from "react-native";
import useMe from "../hooks/useMe";

export default function Me() {
  const { data } = useMe();
  useEffect(() => {
    navigation.setOptions({
      title: data?.me?.username,
    });
  }, []);

  return (
    <View style={{backgroundColor:"black",flex:1, alignItems:"center",justifyContent:"center"}}>
      <Text style={{color:"white"}}>Me</Text>
    </View>
  );
}