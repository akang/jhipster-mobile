import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Avatar, Button, Card, Paragraph} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/reducers/authentication.reducer';

const LeftContent = props => <Avatar.Icon {...props} icon="location-exit" />

export const LogoutScreen = (props) => {

    const dispatch = useDispatch();

    const handleLogout = () =>{
        dispatch(logout())
    }

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Title title="Logout" left={LeftContent} />

                <Card.Content>
                    <Paragraph>Are you sure you want to logout?</Paragraph>
                </Card.Content>

                <Card.Actions>
                    <Button onPress={()=>props.jumpTo('home')}>Cancel</Button>
                    <Button onPress={handleLogout}>Ok</Button>
                </Card.Actions>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C8C8C8',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width:'100%'
    },

    card: {
        width:'80%',
        paddingTop:30,
        paddingBottom:30
    }


});
