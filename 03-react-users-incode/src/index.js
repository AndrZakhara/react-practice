import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UsersInfoApp from './components/UsersInfoApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UsersInfoApp />, document.getElementById('root'));
registerServiceWorker();
