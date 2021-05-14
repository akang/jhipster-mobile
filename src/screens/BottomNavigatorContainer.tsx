import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {SettingsScreen} from './SettingsScreen';
import {HomeScreen} from './HomeScreen';
import {LogoutScreen} from './LogoutScreen';



export const BottomNavigatorContainer = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home-circle' },
        { key: 'settings', title: 'Settings', icon: 'cog-outline' },
        { key: 'logout', title: 'Logout', icon: 'location-exit' },
    ]);

    const renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
            case 'home':
                return <HomeScreen/>;
            case 'settings':
                return <SettingsScreen/>;
            case 'logout':
                return <LogoutScreen jumpTo={jumpTo}/>;
        }
    }

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


