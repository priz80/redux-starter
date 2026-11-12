import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';
import './index.scss';

const store = createStore(reducer);

const { dispatch, subscribe, getState } = store;

const update = () => {
    document.getElementById('counter').textContent = getState().value;
};

subscribe(update);

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random() * 11) - 5;
    dispatch(rnd(value));
});
