import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";


const LoginLink = styled.TouchableOpacity`
    margin:0 auto;margin-top:10px;
`;



import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

export default function Welcome(props) {

    const goToCreateAccount = () => props.navigation.navigate("CreateAccount");
    const goToLogIn = () => props.navigation.navigate("LogIn");

    return ( 
        <AuthLayout>
            <AuthButton
                text="Crate New Account"
                disabled={false}
                onPress={goToCreateAccount}
            />
            <TouchableOpacity onPress={goToLogIn}>
            <LoginLink>Log In</LoginLink>
            </TouchableOpacity>
        </AuthLayout>
    )
};

