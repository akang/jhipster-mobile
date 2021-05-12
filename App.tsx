import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Constants from 'expo-constants';
import {Main} from './Main';
import { Provider as StoreProvider } from 'react-redux';
import initStore from './src/redux/store';


const store = initStore();

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
