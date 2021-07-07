import React, { useRef }  from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { TextInput } from "../components/auth/AuthShared";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";

import {useForm} from "react-hook-form";
import { useEffect } from "react";
const Container = styled.View`
    flex:1;
    background-color:black;
`;

export default function CreateAccount(props) {
    const {register, handleSubmit, setValue} = useForm();
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
    const onValid = (data) => {
        console.log(data);
    }
    useEffect(() => {
        register("firstName");
        register("lastName");
        register("username");
        register("email");
        register("password");
    },[register]);
    return (
       <AuthLayout>
            <TextInput
                placeholder="First Name"
                returnKeyType="next"
                onSubmitEditing={() => onNext(lastNameRef)}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onChangeText={(text)=> setValue("firstName", text)}
            />
            <TextInput
                ref={lastNameRef}
                placeholder="Last Name"
                returnKeyType="next"
                onSubmitEditing={() => onNext(usernameRef)}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onChangeText={(text)=> setValue("lastName", text)}
            />
            <TextInput
                ref={usernameRef}
                placeholder="Username"
                returnKeyType="next"
                onSubmitEditing={() => onNext(emailRef)}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onChangeText={(text)=> setValue("username", text)}
            />
            <TextInput
                ref={emailRef}
                placeholder="Email"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => onNext(passwordRef)}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onChangeText={(text)=> setValue("email", text)}
            />
            <TextInput
                ref={passwordRef}
                placeholder="Password"
                secureTextEntry
                returnKeyType="done"
                onSubmitEditing={onDone}
                lastOne={true}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onChangeText={(text)=> setValue("password", text)}
            />
            <AuthButton text="Create Account" disabled={true} onPress={() => null} />
       </AuthLayout>
    )
}

