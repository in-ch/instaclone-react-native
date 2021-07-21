import React from "react";
import { TouchableOpacity, Text } from "react-native";
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
                text="Create New Account"
                disabled={false}
                onPress={goToCreateAccount}
            />
            <LoginLink  onPress={goToLogIn}><Text style={{color:"white"}}>Log In</Text></LoginLink>
        </AuthLayout>
    )
};

