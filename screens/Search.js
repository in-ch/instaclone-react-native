import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../components/DismissKeyboard";

const Input = styled.TextInput``;

export default function Search({navigation}) {
  const { setValue, register } = useForm();
  
  const SearchBox = () => (
    <TextInput
      style={{ backgroundColor: "white" }}
      placeholderTextColor="black"
      placeholder="Search photos" 
      autoCapitalize="none"
      returnKeyLabel="Search"  // 안드로이드용, 키보드에서 Submit 부분 수정
      returnKeyType="search"   // IOS용, 키보드에서 Submit 부분 수정
      autoCorrect={false}   // 자동 완성 기능 빼기
      onChangeText={(text) => setValue("keyword", text)}
    />
  );
  useEffect(() => {
    navigation.setOptions({
      headerTitle: SearchBox,
    });
    register("keyword");
  }, []);

  return (
    <DismissKeyboard>
      <View
        style={{
          backgroundColor: "black",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
         <Text style={{ color: "white" }}>Photo</Text>
      </View>
    </DismissKeyboard>
  );
}