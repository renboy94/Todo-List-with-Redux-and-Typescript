import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
} from 'react-native';
// import {createStore} from 'redux';
import {Provider} from 'react-redux';
// import {reducers} from './src/reducers';
import {PersistGate} from 'redux-persist/integration/react';
import configStore from './configureStore';

import Main from './src/components/Main';

// const store = createStore(reducers);

const App: React.FC = () => {
  return (
    <Provider store={configStore().store}>
      <PersistGate loading={null} persistor={configStore().persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
