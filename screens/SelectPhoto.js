import React from "react";
import { Text, View } from "react-native";
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
  return (
    <Container>
      <Top />
      <Bottom />
    </Container>
  );
}