import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WebSite from './components/WebSite';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WebSite />, document.getElementById('root'));
registerServiceWorker();
