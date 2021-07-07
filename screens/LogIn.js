import React from "react";
import { useRef } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import { TextInput } from "../components/auth/AuthShared";
import { useEffect } from "react";
import {useForm} from "react-hook-form";

export default function LogIn() {
    const {register, handleSubmit, setValue} = useForm();
    const passwordRef = useRef();
    const onNext = (nextOne) => {
        nextOne?.current?.focus();
    };
    const onValid = (data) => {
        console.log(data);
    };  
    useEffect(()=>{
        register("username");
        register("password");
    },[register]);
    return (
        <AuthLayout>
            <TextInput
                autoCapitalize={"none"}
                placeholder="Username"
                returnKeyType="next"
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onSubmitEditing={()=> onNext(passwordRef)}
                onChangeText={(text)=>setValue("username",text)}
            />
            <TextInput
                ref={passwordRef}
                placeholder="Password"
                secureTextEntry
                returnKeyType="done"
                lastOne={true}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onSubmitEditin={handleSubmit(onValid)}
                onChangeText={(text)=>setValue("password",text)}

            />
            <AuthButton text="Log In" disabled={false} onPress={handleSubmit(onValid)} />
        </AuthLayout>
    )
};
