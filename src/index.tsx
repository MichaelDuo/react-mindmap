import React from 'react';
import { Provider } from 'react-redux';
import configStore from 'store';
import Editor from 'components/Editor';

const store = configStore();

export default (): JSX.Element => (
    <Provider store={store}>
        <Editor />
    </Provider>
);
