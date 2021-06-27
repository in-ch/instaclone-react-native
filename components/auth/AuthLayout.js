import React from "react";
import styled from "styled-components/native";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

const Button = styled.TouchableOpacity`
  background-color: #0095f6;
  padding: 13px 10px;
  border-radius: 3px;
  width: 100%;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
`;

export default function AuthButton({ onPress, disabled, text }) {
    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={dismissKeyboard}>
      <Container>
        <Logo resizeMode="contain" source={require("../../assets/logo.png")} />
        {children}
      </Container>
    </TouchableWithoutFeedback>
  );
}