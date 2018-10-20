import React from 'react';
import ReactDOM from 'react-dom';
// import { Router } from 'react-router'
import Header from './Header';
import Navigation from './Navigation';
import Home from './Home';
import './WebSite.css';

export default function WebSite () {
    return (
        <div className="all-site-wrapper">
            <Header />
            <div className="main-page-wrapper">
                <Navigation />
                <Home />
            </div>

        </div>
    )
}

