import React from 'react';
import ReactDOM from 'react-dom';
import './Navigation.css';

export default function Navigation() {
    return(
        <ul className="c-main-nav">
            <li className="c-main-nav_item">
                <img src="#" alt="nav-img"/>
                <a href="#">home</a>
            </li>
            <li className="c-main-nav_item">
                <img src="#" alt="nav-img"/>
                <a href="#">about me</a>
            </li>
            <li className="c-main-nav_item">
                <img src="#" alt="nav-img"/>
                <a href="#">portfolio</a>
            </li>
            <li className="c-main-nav_item">
                <img src="#" alt="nav-img"/>
                <a href="#">contacts</a>
            </li>
            <li className="c-main-nav_item">
                <img src="#" alt="nav-img"/>
                <a href="#">blog</a>
            </li>
        </ul>
    )
}