import React from "react";
import styled from "styled-components/native";
import { colors } from "../styled";

const Button = styled.TouchableOpacity`
    background-color:${colors.blue};
    padding: 7px 10px;
    width:100%;
    margin:0 auto;
    border-radius: 8px;
    opacity:${props => (props.disables ? "0.5" : "1")}
`;
const ButtonText = styled.Text`
    color:white;font-weight:600;font-size:12px;text-align:center;
`;

const AuthButton = ({onPress, disabled, text}) => {
    return (
        <Button disables={disabled} onPress={onPress}>
            <ButtonText>
                {text}
            </ButtonText>      
        </Button>
    )
}

export default AuthButton;