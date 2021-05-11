import React from 'react';
import {Button, Avatar, TextInput} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

export const Login = () =>{
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return(
        <View style={styles.container}>
            <Avatar.Icon size={100} icon="account" />

            <TextInput
                label="username"
                style={styles.username}
                value={username}
                onChangeText={text => setUsername(text)}
            />

            <TextInput
                label="password"
                style={styles.password}
                value={password}
                onChangeText={text => setPassword(text)}
            />

            <Button contentStyle={styles.buttonContentStyle} labelStyle={styles.textStyle} style={styles.loginButton} mode="contained" onPress={() => console.log('Pressed')}>
                LOGIN
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:50,
        paddingBottom:30,
    },

    username:{
        width: '80%',
        marginTop: 30,
        marginBottom: 10
    },

    password:{
        width: '80%',
        marginTop: 0,
        marginBottom: 30
    },

    loginButton:{
        width:'80%',
        height: 70,
        paddingTop: 20,
        paddingBottom:20,
        justifyContent: 'center',
    },

    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },

    buttonContentStyle: {
        height: 70,
    }

});
