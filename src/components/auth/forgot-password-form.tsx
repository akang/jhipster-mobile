import React, {useEffect} from 'react';
import {Button, TextInput, Title} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from '../../redux/reducers/root.reducer';
import {handlePasswordResetInit, reset} from '../../redux/reducers/password-reset.reducer';

export const ForgotPasswordForm = (props:{navigation?:any}) =>{

    const {navigation} = props;

    const dispatch = useDispatch();

    const [email, setEmail] = React.useState('');
    const resetPasswordSuccess = useSelector((state: IRootState) => state.passwordReset.resetPasswordSuccess);


    useEffect(()=>{
        if(resetPasswordSuccess){
            alert('Your password has been reset. Please check your email to complete the reset process.')
            dispatch(reset())
            setEmail('')
            navigation.navigate('SignIn')
        }
    },[resetPasswordSuccess]);

    const submitResetPassword = () =>{
        dispatch(handlePasswordResetInit(email))
    }

    return(
        <View style={styles.container}>
            <Title style={styles.title}>Fill in your email and we will sort out your access.</Title>


            <TextInput
                label="email"
                style={styles.email}
                value={email}
                onChangeText={text => setEmail(text)}
            />


            <Button contentStyle={styles.buttonContentStyle} labelStyle={styles.textStyle} style={styles.loginButton} mode="contained" onPress={submitResetPassword}>
                RESET PASSWORD
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:30,
        paddingBottom:30,
        width: '90%',
        height: '40%'
    },

    title:{
        paddingLeft: 30,
        paddingRight: 30
    },

    email:{
        width: '80%',
        marginTop: 30,
        marginBottom: 10
    },


    loginButton:{
        width:'80%',
        height: 70,
        marginTop: 10,
        paddingTop: 30,
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
