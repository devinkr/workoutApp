import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './navigation';

function App(): JSX.Element {
  return (
    <>
      <Navigation />
      <StatusBar barStyle="light-content" />
    </>
  );
}

export default App;
