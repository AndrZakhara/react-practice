import React from 'react';
import './lib/css/fontawesome-all.min.css';
import './lib/webfonts/fa-brands-400.eot';
import './Search.css';

export default function Search() {
    const element =
        <div className="c-search">
            <form className="c-search__form"action="">
                <input className="c-search__input"type="text" placeholder="Seach..."/>
                <button className="c-search__button"type="submit">
                    <i className="c-search__icon fas fa-search"></i>
                </button>
            </form>
        </div>


    return element;
}