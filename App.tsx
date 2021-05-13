import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Constants from 'expo-constants';
import {Main} from './Main';
import { Provider as StoreProvider } from 'react-redux';
import initStore from './src/redux/store';
import {bindActionCreators} from 'redux';
import setupAxiosInterceptors from './src/redux/config/axios-interceptor';
import {clearAuthentication} from './src/redux/authentication.reducer';


const store = initStore();

const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(() => actions.clearAuthentication('Unauthorized'));

export default function App() {
  return (
      <StoreProvider store={store}>
          <PaperProvider>
              <Main/>
          </PaperProvider>
      </StoreProvider>
  );
}

AppRegistry.registerComponent(Constants.name, () => Main);
