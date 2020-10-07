import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, compose, createStore} from 'redux';
import allReducers from './js/stateManagement/allReducers';
import allSaga from './js/stateManagement/allSaga';

const sagaMiddleware = createSagaMiddleware();
const middleWare = compose(applyMiddleware(sagaMiddleware));
const store = createStore(allReducers(), middleWare);
sagaMiddleware.run(allSaga);

class Index extends Component {
    render() {
        return <Provider store={store}>
            <App/>
        </Provider>;
    }
}

AppRegistry.registerComponent(appName, () => Index);
