import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Login} from './src/views/auth/Login';

export const Main = () => {
    return (
        <View style={styles.container}>
            <Login/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C8C8C8',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },


});
