import React, { useState } from 'react';
import { 
    View, Text, Image, Button, Alert, TextInput, StyleSheet, KeyboardAvoidingView, 
 } from 'react-native';

export const img = require('./../assets/todolist.png')

const Login = props => {
    const [email, setEmail] = useState(props.email);
    const [password, setPassword] = useState('');
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.topView}>
                <Image style={styles.img} source={img}/>
            </View>
            <View style={styles.bottomView}>
                <TextInput style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    keyboardType='email-address'
                    autoCapitalize='none' 
                    onChangeText={email => setEmail(email)}/>
                <TextInput style={styles.input}
                    placeholder="Senha"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password)} />
                <Button title="Login" onPress={() => 
                    Alert.alert(`Email: ${email}, password: ${password}`) }
                />
                <View style={styles.textContainer}>
                    <Text>Não possui cadastro?</Text>
                <Text style={styles.textRegister} onPress={() => {
                    props.navigation.navigate('Register');
                }}> Criar registro </Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    topView: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },
    img: {
        width: 200,
        height: 200,
    },
    bottomView: {
        flexDirection: 'column',
        paddingRight: 20,
        paddingLeft: 20,
    },
    input: {
        marginBottom: 20,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    textRegister: {
        fontWeight: 'bold',
    }
})

export default Login;