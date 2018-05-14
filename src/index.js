import React from 'react';
import ReactDOM from 'react-dom';
// import {render} from 'react-dom';

import './normolize.css';
import './index.css';
import clients from './clients.json';


import UserItemList from './component/UserItemList';
import Userinfo from './component/Userinfo';


const layoutMain = (
    <div className="l-main">
        <UserItemList clients = { clients } />
        <Userinfo clients = {clients} />
        {console.log(clients)}
    </div>
);


ReactDOM.render(
    layoutMain,
    document.getElementById('app')
);
