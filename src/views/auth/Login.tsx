import React, {useEffect} from 'react';
import {Button, Avatar, TextInput} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/authentication.reducer';
import {IRootState} from '../../redux/root.reducer';

export const Login = () =>{

    const dispatch = useDispatch();

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [hidePassword, setHidePassword] = React.useState(true);
    const [eyeIcon, setEyeIcon] = React.useState('eye');
    const jwt = useSelector((state: IRootState) => state.authentication.jwt);

    const submitLogin = () =>{
        console.log('Pressed')
        dispatch(login(username,password))
    }

    useEffect(()=>{
        console.log('reading jwt')
        console.log(jwt)
    },[jwt]);

    const toggleShowPassword = () =>{
        setHidePassword(!hidePassword);
        if(eyeIcon === 'eye'){
            setEyeIcon('eye-slash')
        }else{
            setEyeIcon('eye')
        }
    }

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
                secureTextEntry={hidePassword}
                style={styles.password}
                value={password}
                onChangeText={text => setPassword(text)}
                right={
                    <TextInput.Icon
                        name={()=><Icon name={eyeIcon} color="#C8C8C8" style={{fontSize: 20}}/>} // where <Icon /> is any component from vector-icons or anything else
                        onPress={toggleShowPassword}
                    />
                }
            />

            <Button contentStyle={styles.buttonContentStyle} labelStyle={styles.textStyle} style={styles.loginButton} mode="contained" onPress={submitLogin}>
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
