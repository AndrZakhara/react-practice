import React from 'react';
import ReactDOM from 'react-dom';
import './normolize.css';
import './index.css';
import clients from './clients.json';

import Sidebar from './component/UserItem';
import Userinfo from './component/Userinfo';


const layoutMain = (
    <div className="l-main">
        <Sidebar clients = {clients} />
        <Userinfo clients = {clients} />
        {console.log(clients)}
    </div>
);


ReactDOM.render(
    layoutMain,
    document.getElementById('app')
);
