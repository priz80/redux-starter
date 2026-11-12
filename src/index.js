import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';
import App from './components/App';
import './index.scss';

const store = createStore(reducer);

const { inc, dec, rnd } = bindActionCreators(actions, store.dispatch);

const update = () => {
    const state = store.getState();
    root.render(
        <App counter={state.value} inc={inc} dec={dec} rnd={rnd} />
    );
};

store.subscribe(update);

const root = ReactDOM.createRoot(document.getElementById('root'));
update();
