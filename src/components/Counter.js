import React from 'react';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="counter">
            <div className="counter__title">Redux Counter</div>
            <div className={`counter__value ${counter > 0 ? 'counter__value--positive' : counter < 0 ? 'counter__value--negative' : 'counter__value--zero'}`}>
                {counter}
            </div>
            <div className="counter__actions">
                <button onClick={inc} className="counter__btn counter__btn--primary">+1</button>
                <button onClick={dec} className="counter__btn counter__btn--danger">-1</button>
                <button onClick={rnd} className="counter__btn counter__btn--outline counter__btn--full">Random</button>
            </div>
        </div>
    );
};

export default Counter;
