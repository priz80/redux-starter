import React from 'react';
import Counter from './Counter';

const App = ({ counter, inc, dec, rnd }) => {
    return <Counter counter={counter} inc={inc} dec={dec} rnd={rnd} />;
};

export default App;
