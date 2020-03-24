import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './Store/configureStore'
import rootSaga from './Sagas/Sagas.js'

import ProjectList from "./Interface/projectList.js";

export const store = configureStore()

store.runSaga(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <ProjectList />
    </Provider>,
    document.getElementById('root')
);