import { gql, useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../components/DismissKeyboard";

const MessageContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const MessageText = styled.Text`
  margin-top: 15px;
  color: white;
  font-weight: 600;
`;

const SEARCH_PHOTOS = gql`
    query searchPhotos($keyword: String!) {
      searchPhotos(keyword: $keyword) {
        id
        file
      }
    }
`;

export default function Search({navigation}) {
  const { setValue, register, watch, handleSubmit } = useForm();
  const [startQueryFn, { loading, data, called }] = useLazyQuery(SEARCH_PHOTOS);
  const onValid = ({ keyword }) => {
    startQueryFn({
      variables: {
        keyword,
      },
    });
  };

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
      onSubmitEditing={handleSubmit(onValid)}
    />
  );
  useEffect(() => {
    navigation.setOptions({
      headerTitle: SearchBox,
    });
    register("keyword", {
      required: true,
      minLength: 3,
    });
  }, []);

  return (
    <DismissKeyboard>
      <View style={{ flex: 1, backgroundColor: "black" }}>
          {loading ? (
            <MessageContainer>
              <ActivityIndicator size="large" />
              <MessageText>Searching...</MessageText>
            </MessageContainer>
          ) : null}
          {!called ? (
            <MessageContainer>
              <MessageText>Search by keyword</MessageText>
            </MessageContainer>
          ) : null}
          {data?.searchPhotos !== undefined &&
          data?.searchPhotos?.length === 0 ? (
            <MessageContainer>
              <MessageText>Could not find anything.</MessageText>
            </MessageContainer>
          ) : null}
         <Text style={{ color: "white" }}>Photo</Text>
      </View>
    </DismissKeyboard>
  );
}