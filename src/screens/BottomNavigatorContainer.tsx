import React from 'react';

import {StyleSheet, View} from 'react-native';
import {BottomNavigation, Text} from 'react-native-paper';
import {SettingsScreen} from './SettingsScreen';
import {HomeScreen} from './HomeScreen';
import {LogoutScreen} from './LogoutScreen';


const HomeRoute = () => <HomeScreen/>;
const SettingsRoute = () => <SettingsScreen/>;
const LogoutRoute = () => <LogoutScreen/>;

export const BottomNavigatorContainer = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home-circle' },
        { key: 'settings', title: 'Settings', icon: 'cog-outline' },
        { key: 'logout', title: 'Logout', icon: 'location-exit' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        settings: SettingsRoute,
        logout: LogoutRoute
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            sceneAnimationEnabled={false}
            shifting={true}
            renderScene={renderScene}
        />
    );
}


