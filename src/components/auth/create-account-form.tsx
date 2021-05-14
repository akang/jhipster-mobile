import React, {useEffect} from 'react';
import {Button, TextInput, Title} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {handleRegister, reset} from '../../redux/reducers/register.reducer';
import {IRootState} from '../../redux/reducers/root.reducer';

export const CreateAccountForm = (props:{navigation?:any}) =>{

    const {navigation} = props;

    const dispatch = useDispatch();

    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [hidePassword, setHidePassword] = React.useState(true);
    const [eyeIcon, setEyeIcon] = React.useState('eye');
    const registrationSuccess = useSelector((state: IRootState) => state.register.registrationSuccess);


    const toggleShowPassword = () =>{
        setHidePassword(!hidePassword);
        if(eyeIcon === 'eye'){
            setEyeIcon('eye-slash')
        }else{
            setEyeIcon('eye')
        }
    }

    useEffect(()=>{
        if(registrationSuccess){
            alert('You have been registered! Please check your email for confirmation.')
            dispatch(reset())
            setEmail('')
            setUsername('')
            setPassword('')
            navigation.navigate('SignIn')
        }
    },[registrationSuccess]);

    const submitRegistration = () =>{
        dispatch(handleRegister(username,email,password,'en'))
    }

    return(
        <View style={styles.container}>
            <Title>Let's register you real quick</Title>

            <TextInput
                label="username"
                style={styles.username}
                value={username}
                onChangeText={text => setUsername(text)}
            />

            <TextInput
                label="email"
                style={styles.email}
                value={email}
                onChangeText={text => setEmail(text)}
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


            <Button contentStyle={styles.buttonContentStyle} labelStyle={styles.textStyle} style={styles.loginButton} mode="contained" onPress={submitRegistration}>
                REGISTER
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:50,
        paddingBottom:50,
        width: '90%',
        height: '60%'
    },

    username:{
        width: '80%',
        marginTop: 30,
        marginBottom: 10
    },

    email:{
        width: '80%',
        marginTop: 0,
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
