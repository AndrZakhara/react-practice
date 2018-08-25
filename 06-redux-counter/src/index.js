import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import Counter from './components/Counter';
import counter from './reducers';

const store = createStore(counter, 0);
const rootEll = document.getElementById('root');

const render =  () => ReactDOM.render(
    <Counter
        value = {store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootEll
);

render();
store.subscribe(render);