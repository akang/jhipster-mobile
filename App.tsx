import * as React from 'react';
import {AppRegistry} from 'react-native';
import Constants from 'expo-constants';
import {Provider as StoreProvider} from 'react-redux';
import initStore from './src/redux/store';
import {bindActionCreators} from 'redux';
import setupAxiosInterceptors from './src/redux/config/axios-interceptor';
import {clearAuthentication} from './src/redux/authentication.reducer';
import {MainNavigator} from './src/main-navigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

const store = initStore();

const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(() => actions.clearAuthentication('Unauthorized'));


export default function App() {
  return (
      <StoreProvider store={store}>
          <PaperProvider>
              <NavigationContainer>
                  <MainNavigator/>
              </NavigationContainer>
          </PaperProvider>
      </StoreProvider>
  );
}

