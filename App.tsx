import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Constants from 'expo-constants';
import {Main} from './Main';

export default function App() {
  return (
      <PaperProvider>
        <Main />
      </PaperProvider>
  );
}

AppRegistry.registerComponent(Constants.name, () => Main);
