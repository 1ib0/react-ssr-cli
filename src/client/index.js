//client/index. js
import React from 'react';
import ReactDom from 'react-dom';
import RoutesComponent from '../Routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { clientStore } from '../store';

const App = () => {
    let store = clientStore();
    return (
        <Provider store={store}>
            <BrowserRouter>
                <RoutesComponent />
            </BrowserRouter>
        </Provider>
    );
};
ReactDom.hydrate(<App />, document.getElementById('root'));
