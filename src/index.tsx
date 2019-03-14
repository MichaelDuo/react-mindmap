import React from 'react';
import { Provider } from 'react-redux';
import configStore from 'store';
import Editor, { EditorProps } from 'core/Editor';

const store = configStore();

type Props = EditorProps;

export default (props: Props) => (
    <Provider store={store}>
        <Editor {...props} />
    </Provider>
);
