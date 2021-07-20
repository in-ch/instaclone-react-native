import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import styled from "styled-components/native";

const Container = styled.View`
  flex:1;
  background-color: black;
`;
const Top = styled.View`
  flex:1;
`;
const Bottom = styled.View`
  flex:1;
`;
const ImageContainer = styled.TouchableOpacity``;
const IconContainer = styled.View`
  position: absolute;
  bottom: 5px;
  right: 0px;
`;


export default function SelectPhoto() {
  const [ok, setOk] = useState(false); 
  const [photos, setPhotos] = useState([]);  // getPhotos로 가져온 사진을 담을 배열 
  const [chosenPhoto, setChosenPhoto] = useState("");   // 이미지를 선택하면 이곳에 담음. 

  const getPhotos = async () => {   // 요청이 수락되면 getPhotos를 통해서 사진들을 가져올 수 있음. 
    const { assets: photos } = await MediaLibrary.getAssetsAsync();
    setPhotos(photos);
    setChosenPhoto(photos[0]?.uri);
  };
  const getPermissions = async () => {  // 앨범에서 사진 가져오는 거 요청 
    const {
      accessPrivileges,
      canAskAgain,
    } = await MediaLibrary.getPermissionsAsync();
    if (accessPrivileges === "none" && canAskAgain) {
      const { accessPrivileges } = await MediaLibrary.requestPermissionsAsync();
      if (accessPrivileges !== "none") {
        setOk(true);
        getPhotos();
      }
    } else if (accessPrivileges !== "none") {
      setOk(true);
      getPhotos();
    }
  };
  useEffect(() => {
    getPermissions();
  }, []);
  const numColumns = 4;
  const { width } = useWindowDimensions();
  const choosePhoto = (uri) => {
    setChosenPhoto(uri);
  };
  const renderItem = ({ item: photo }) => (
    <ImageContainer onPress={() => choosePhoto(photo.uri)}>
      <Image
        source={{ uri: photo.uri }}
        style={{ width: width / numColumns, height: 100 }}
      />
      <IconContainer>
        <Ionicons name="checkmark-circle" size={18} color="white" />
      </IconContainer>
    </ImageContainer>
  );
  return (
    <Container>
      <Top>
        {chosenPhoto !== "" ? (
          <Image
            source={{ uri: chosenPhoto }}
            style={{ width, height: "100%" }}
          />
        ) : null}
      </Top>
      <Bottom>
        <FlatList
          data={photos}
          numColumns={numColumns}
          keyExtractor={(photo) => photo.id}
          renderItem={renderItem}
        />
      </Bottom>
    </Container>
  );
}