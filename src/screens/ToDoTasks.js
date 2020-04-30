import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const imageCheck = require('../assets/todolist.png');

export default class ToDoTasks extends Component {
    render() {
        return (
            <View style={StyleSheet.container} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10,
    },
    icon: {
        width: 26,
        height: 26,
    },
    image: {
        width: 50,
        height: 50,
    }
});