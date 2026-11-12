import React from 'react';
import {inc, dec, rnd} from "../actions"
import { useSelector, useDispatch } from 'react-redux';


const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="counter">
            <div className="counter__title">Redux Counter</div>
            <div className={`counter__value ${counter > 0 ? 'counter__value--positive' : counter < 0 ? 'counter__value--negative' : 'counter__value--zero'}`}>
                {counter}
            </div>
            <div className="counter__actions">
                <button onClick={() => dispatch(inc())} className="counter__btn counter__btn--primary">+1</button>
                <button onClick={() => dispatch(dec())} className="counter__btn counter__btn--danger">-1</button>
                <button onClick={() => dispatch(rnd())} className="counter__btn counter__btn--outline counter__btn--full">RND</button>
            </div>
        </div>
    );
};

export default Counter;
