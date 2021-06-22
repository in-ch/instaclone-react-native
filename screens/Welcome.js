import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../styled";

const Container = styled.View`
    flex:1;
    background-color: black;
    justify-content: center;
    align-content: center;
`;

const Logo = styled.Image`
    max-width: 20%;margin:0 auto;height:100px;
`;

const CreateAccount = styled.View`
    background-color:${colors.blue};
    padding: 7px 10px;
    margin:0 auto;
    border-radius: 8px;
`;
const CreateAccountText = styled.Text`
    color:white;font-weight:600;font-size:12px;
`;

const LoginLink = styled.Text`
    color:${colors.blue};margin:0 auto;margin-top:10px;font-size:12px;
`;

export default function Welcome(props) {

    const goToCreateAccount = () => props.navigation.navigate("CreateAccount");
    const goToLogIn = () => props.navigation.navigate("LogIn");

    return ( 
        <Container>
            <Logo resizeMode="center" source={require("../assets/logo.png")} />
            <TouchableOpacity onPress={goToCreateAccount}>
                <CreateAccount>
                    <CreateAccountText>
                        create account
                    </CreateAccountText>      
                </CreateAccount>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToLogIn}>
                <LoginLink>
                    Log in
                </LoginLink>
            </TouchableOpacity>
        </Container>
    )
};

