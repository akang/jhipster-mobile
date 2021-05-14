import React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {SettingsScreen} from './settings-screen';
import {HomeScreen} from './home-screen';
import {LogoutScreen} from './logout-screen';


export const BottomNavigatorScreen = () => {

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


