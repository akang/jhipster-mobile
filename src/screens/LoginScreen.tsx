import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LoginForm} from '../components/auth/LoginForm';
import {Button} from 'react-native-paper';


export const LoginScreen = () => {

    const onSuccessfulLogin = () =>{
        console.log('navigate to menu')
        //navigation.navigate('Menu')
    }

    return (

            <View style={styles.container}>
                <LoginForm onSuccessfulLogin={onSuccessfulLogin}/>

                <Button mode="text" onPress={() => console.log('Pressed create account')} style={{marginTop:20}}>
                    CREATE ACCOUNT
                </Button>

                <Button mode="text" onPress={() => console.log('Pressed forgot password')} style={{marginTop:10}}>
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
