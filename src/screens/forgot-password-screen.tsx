import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ForgotPasswordForm} from '../components/auth/forgot-password-form';

export const ForgotPasswordScreen = (props:{navigation:any}) => {

    const {navigation} = props;

    return (
        <View style={styles.container}>
            <ForgotPasswordForm navigation={navigation}/>
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
