import React, { useRef }  from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { TextInput } from "../components/auth/AuthShared";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
const Container = styled.View`
    flex:1;
    background-color:black;
`;

export default function CreateAccount(props) {
    const lastNameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
  
    const onNext = (nextOne) => {
      nextOne?.current?.focus();
    };
    const onDone = () => {
      alert("done!");
    };

    return (
       <AuthLayout>
            <TextInput
                placeholder="First Name"
                returnKeyType="next"
                onSubmitEditing={() => onNext(lastNameRef)}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
            />
            <TextInput
                ref={lastNameRef}
                placeholder="Last Name"
                returnKeyType="next"
                onSubmitEditing={() => onNext(usernameRef)}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
            />
            <TextInput
                ref={usernameRef}
                placeholder="Username"
                returnKeyType="next"
                onSubmitEditing={() => onNext(emailRef)}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
            />
            <TextInput
                ref={emailRef}
                placeholder="Email"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => onNext(passwordRef)}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
            />
            <TextInput
                ref={passwordRef}
                placeholder="Password"
                secureTextEntry
                returnKeyType="done"
                onSubmitEditing={onDone}
                lastOne={true}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
            />
            <AuthButton text="Create Account" disabled={true} onPress={() => null} />
       </AuthLayout>
    )
}

