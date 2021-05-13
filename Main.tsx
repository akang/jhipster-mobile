import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Login} from './src/views/auth/Login';
import {Button} from 'react-native-paper';

export const Main = () => {
    return (
        <View style={styles.container}>
            <Login/>

            <Button mode="text" onPress={() => console.log('Pressed')} style={{marginTop:20}}>
                CREATE ACCOUNT
            </Button>

            <Button mode="text" onPress={() => console.log('Pressed')} style={{marginTop:10}}>
                FORGOT PASSWORD
            </Button>
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
