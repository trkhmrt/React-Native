import React, {useState} from 'react';
import {useRouter} from "expo-router";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {login} from "../services/authservice";

const Index = () => {

    const router = useRouter();
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');


    const handleLogin = async (username,password) => {
        await login(username,password);
        router.push("/home")
    }


    return (
        <View style={{backgroundColor:'#FFFDF6',flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:'50%',backgroundColor:'#EFEEEA'}}>
                <TextInput
                onChangeText={setUsername}
                value={username}
                />

                <TextInput
                    onChangeText={setPassword}
                    value={password}
                />

                <TouchableOpacity onPress={()=>handleLogin(username,password)}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Index;