import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LoginForm} from '../components/auth/login-form';
import {Button} from 'react-native-paper';


export const LoginScreen = (props:{navigation:any}) => {

    const {navigation} = props;

    return (

            <View style={styles.container}>
                <LoginForm/>

                <Button mode="text" onPress={() => navigation.navigate('CreateAccount')} style={{marginTop:20}}>
                    CREATE ACCOUNT
                </Button>

                <Button mode="text" onPress={() => navigation.navigate('ForgotPassword')} style={{marginTop:10}}>
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
