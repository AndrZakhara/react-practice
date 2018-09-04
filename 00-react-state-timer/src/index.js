import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './component/Greeting';
import Clock from './component/Clock';

ReactDOM.render(
    <div>
        <Greeting name = 'Dear User' />
        <Clock />
    </div>
    ,
    document.getElementById('root')
);