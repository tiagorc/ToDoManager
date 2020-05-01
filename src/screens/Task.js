import React, { Component } from 'react';
import { StyleSheet, View, Switch, Button, TextInput, Text, Alert } from 'react-native';
import { writeTaskOnFirebaseAsync } from '../services/FirebaseAPI';

export default class Task extends Component {
    state = {
        title: '',
        resume: '',
        priority: true,
        isDone: false,
    };

    async _saveTaskAsync() {
        var task = {
            title: this.state.title,
            resume: this.state.resume,
            priority: this.state.priority,
            isDone: this.state.isDone,
        };

        try {
            await writeTaskOnFirebaseAsync(task);
            this.props.navigation.goBack();
        } catch (error) {
            Alert.alert("Ops, houve um erro", error.message);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder="Título"
                    value={this.state.title}
                    onChangeText={(typedTtitle) => this.setState({title: typedTtitle})} />

                <TextInput style={[styles.input, styles.multilineInput]}
                    placeholder="Resumo"
                    multiline={true}
                    numberOfLines={4}
                    value={this.state.resume}
                    onChangeText={(typedResume) => this.setState({resume: typedResume})} />

                <View>
                    <Switch value={this.state.priority}
                        onValueChange={(value) => this.setState({priority: value})} />
                    <Text style={styles.switchText}>É prioridade?</Text>
                </View>

                <View style={styles.switchContainer}>
                    <Switch value={this.state.isDone}
                        onValueChange={(value) => this.setState({isDone: value})} />
                    <Text style={styles.switchText}>Finalizado?</Text>
                </View>

                <Button style={styles.button}
                    title= "Salvar"
                    onPress={() => this._saveTaskAsync()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
    },
    input: {
        marginBottom: 20,
    },
    multilineInput: {
        height: 100,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20,
    },
    switchText: {
        marginLeft: 20,
        color: 'black',
        fontSize: 18,
    }
});