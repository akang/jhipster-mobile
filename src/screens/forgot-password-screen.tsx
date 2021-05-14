import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const ForgotPasswordScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Forgot Password</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C8C8C8',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },


});
