import React, { Component } from 'react';
import { View, SectionList, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class TaskListView extends Component {

    _renderSectionHeader(sectionData) {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.headerTagContainer}>
                    <Text style={styles.headerTagText}>{sectionData.section.title.substr(0, 1)}</Text>
                </View>
                <Text style={styles.headerText}>{sectionData.section.title}</Text>
            </View>
        );
    }

    _renderItem(itemData) {
        return (
            <TouchableOpacity onPress={() => this._onClickTask(itemData.item)}>
                <View style={styles.itemConteiner}>
                    <Text style={styles.itemTextTitle}>{itemData.item.title}</Text>
                    <Text>{itemData.item.resume}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _onClickTask(task) {
        const { navigate } = this.props.navigation;
        navigate('Task', { task });
    }

    render() {
        return (
            <SectionList renderSectionHeader={(section) => this._renderSectionHeader(section)}
                sections={[
                    {
                        data: this.props.tasks.filter((data) => {
                            return data.priority
                        }), key: "highPriority", title: 'Prioridade'
                    },
                    {
                        data: this.props.tasks.filter((data) => {
                            return !data.priority
                        }), key: "lowPriority", title: 'Normal'
                    },
                ]}
                renderItem={(data) => this._renderItem(data)} />
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
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'silver',
        borderRadius: 25,
        marginTop: 10,
    },
    headerTagContainer: {
        backgroundColor: 'gray',
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    headerTagText: {
        color: '#FFF',
        fontSize: 22,
    },
    headerText: {
        fontSize: 16,
        marginLeft: 10
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f3f2f0',
        marginTop: 5,
        padding: 10,
        height: 75,
    },
    itemTextTitle: {
        fontSize: 22,
    },
});