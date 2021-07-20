import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import * as MediaLibrary from "expo-media-library";
import styled from "styled-components/native";

const Container = styled.View`
  flex:1;
  background-color: black;
`;
const Top = styled.View`
  flex:1;
  background-color:blue;
`;
const Bottom = styled.View`
  flex:1;
  background-color:red;
`;

export default function SelectPhoto() {
  const [ok, setOk] = useState(false); 
  const [photos, setPhotos] = useState([]);  // getPhotos로 가져온 사진을 담을 배열 
  const getPhotos = async () => {   // 요청이 수락되면 getPhotos를 통해서 사진들을 가져올 수 있음. 
    if (ok) {
      const { assets: photos } = await MediaLibrary.getAssetsAsync();
      setPhotos(photos);
    }
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
      }
    } else if (accessPrivileges !== "none") {
      setOk(true);
    }
  };
  useEffect(() => {
    getPermissions();
    getPhotos();
  }, []);

  return (
    <Container>
      <Top />
      <Bottom></Bottom>
    </Container>
  );
}