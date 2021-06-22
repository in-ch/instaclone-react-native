import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { colors } from "../styled";

const Container = styled.View`
    flex:1;
    background-color: black;
    justify-content: center;
    align-content: center;
    padding: 0px 40px;
`;

const Logo = styled.Image`
    max-width: 20%;margin:0 auto;height:100px;
`;

const CreateAccount = styled.TouchableOpacity`
    background-color:${colors.blue};
    padding: 7px 10px;
    width:100%;
    margin:0 auto;
    border-radius: 8px;
    opacity:${props => (props.disables ? "0.5" : "1")}
`;
const CreateAccountText = styled.Text`
    color:white;font-weight:600;font-size:12px;text-align:center;
`;

const LoginLink = styled.TouchableOpacity`
    margin:0 auto;margin-top:10px;
`;

const LoginText = styled.Text`
    font-size:12px;color:${colors.blue};
`;

export default function Welcome(props) {

    const goToCreateAccount = () => props.navigation.navigate("CreateAccount");
    const goToLogIn = () => props.navigation.navigate("LogIn");

    return ( 
        <Container>
            <Logo resizeMode="center" source={require("../assets/logo.png")} />
            <CreateAccount disables={false} onPress={goToCreateAccount}>
                <CreateAccountText>
                    Create New Account
                </CreateAccountText>      
            </CreateAccount>

        
            <LoginLink onPress={goToLogIn}>
                <LoginText>
                    Log in
                </LoginText>
            </LoginLink>
        </Container>
    )
};

