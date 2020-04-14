import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configStore from './configureStore';

import Main from './src/components/Main';

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
