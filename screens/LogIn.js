import React from "react";
import { useRef } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import { TextInput } from "../components/auth/AuthShared";
import { useEffect } from "react";
import {useForm} from "react-hook-form";
import { gql, useMutation, } from "@apollo/client";
import {logUserIn} from "./apollo";

const LOG_IN_MUTATION = gql`
    mutation login($userName: String!, $password: String!) {
        login(userName: $userName, password: $password) {
            ok 
            token
        }
    }
`;

export default function LogIn({route:{params}}) {
    const {register, handleSubmit, setValue, watch} = useForm({
        defaultValues: {
            password: params?.password,
            userName: params?.username,
        },
    });
    const passwordRef = useRef();
    const onCompleted = async (data) => {
        const {login: {ok, token}} = data;
        if(ok){
            await logUserIn(token);
        }
    };
    const [logInMutation, {loading}] = useMutation(LOG_IN_MUTATION, {
        onCompleted,
    });
    const onNext = (nextOne) => {
        nextOne?.current?.focus();
    };
    const onValid = (data) => {
        if(!loading){
            logInMutation({
                variables: {
                    ...data
                }
            })
        }
    };  
    useEffect(()=>{
        register("userName");
        register("password");
    },[register]);
    return (
        <AuthLayout>
            <TextInput
                value={watch("userName")}
                autoCapitalize={"none"}
                placeholder="Username"
                returnKeyType="next"
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onSubmitEditing={()=> onNext(passwordRef)}
                onChangeText={(text)=>setValue("userName",text)}
            />
            <TextInput
                value={watch("password")}
                ref={passwordRef}
                placeholder="Password"
                secureTextEntry
                returnKeyType="done"
                lastOne={true}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onSubmitEditin={handleSubmit(onValid)}
                onChangeText={(text)=>setValue("password",text)}

            />
            <AuthButton text="Log In" loading={loading}  onPress={handleSubmit(onValid)} />
        </AuthLayout>
    )
};
