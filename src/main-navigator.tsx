import React from 'react';

import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from './screens/login-screen';
import {BottomNavigatorScreen} from './screens/bottom-navigator-screen';
import {useSelector} from 'react-redux';
import {IRootState} from './redux/root.reducer';


const Stack = createStackNavigator();

export const MainNavigator = () => {

    const isAuthenticated = useSelector((state: IRootState) => state.authentication.isAuthenticated);

    return (
        <Stack.Navigator>
            {isAuthenticated === false ? (
                // No token found, user isn't signed in
                <Stack.Screen
                    name="SignIn"
                    component={LoginScreen}
                    options={{
                        title: 'Sign in',
                        // When logging out, a pop animation feels intuitive
                        // You can remove this if you want the default 'push' animation
                        animationTypeForReplace: !isAuthenticated ? 'pop' : 'push',
                    }}
                />
            ) : (
                // User is signed in
                <Stack.Screen name="JHipster Mobile" component={BottomNavigatorScreen} />
            )}
        </Stack.Navigator>
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
