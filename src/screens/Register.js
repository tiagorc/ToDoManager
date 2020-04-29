import React, { Component } from 'react';
import { 
    SafeAreaView, Image, View, KeyboardAvoidingView, 
    StyleSheet, Text, TextInput, Button , Alert 
} from 'react-native';

const img = require('./../assets/todolist.png')

export default class Register extends Component {
    state = {
        email: '',
        password: '',
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <View style={styles.topView}>
                    <Image style={styles.img} source={img}/>
                    <Text style={styles.title}>Cadastro de usuário</Text>
                </View>
                <View style={styles.bottomView}>
                    <TextInput style={styles.input} 
                        placeholder="E-mail"
                        keyboardType='email-address'
                        autoCapitalize='none'
                        onChangeText={email => this.setState({ email })} />
                    <TextInput style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}/>
                    <Button title="Registrar usuário"
                        onPress={() => {
                            Alert.alert(`Email: ${this.state.email}\nPassword: ${this.state.password}`)
                        }}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    topView: {
        flex: 0.20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 25,
    },
    img: {
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    bottomView: {
        flex: 1,
        flexDirection: 'column',
        paddingRight: 20,
        paddingLeft: 20,
    },
    input: {
        marginBottom: 20,
    },    
});
