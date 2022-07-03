import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const BoxScreen = () => {

    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Chile#1</Text>
        <Text style={styles.textTwoStyle}>Chile#2</Text>
        <Text style={styles.textOneStyle}>Chile#3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1,
        height: 100,
        marginTop: 100
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
    }
})

export default BoxScreen;
