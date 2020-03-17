import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './Store/configureStore'
import rootSaga from './Sagas/Sagas.js'

export const store = configureStore()

store.runSaga(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <div>
            Task Manager first page
        </div>
    </Provider>,
    document.getElementById('root')
);