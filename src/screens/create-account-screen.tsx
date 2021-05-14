import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {CreateAccountForm} from '../components/auth/create-account-form';

export const CreateAccountScreen = (props:{navigation:any}) => {

    const {navigation} = props;

    return (
        <View style={styles.container}>
            <CreateAccountForm navigation={navigation}/>
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
