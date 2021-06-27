import React from "react";
import styled from "styled-components/native";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
} from "react-native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0px 20px;
`;

const Logo = styled.Image`
  max-width: 50%;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
`;


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
        <KeyboardAvoidingView
            style={{
                width: "100%",
            }}
            behavior="position"
            keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
            >
            <Logo
                resizeMode="contain"
                source={require("../../assets/logo.png")}
            />
            {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}