import React from 'react';
import { component } from 'react';
import '../styles/AddColorForm.css'

 const AddColorForm = () => (

    <header className="l-color-form">
        <form className="c-color-form" onSubmit={e => e.preventDefault()}>
            <input
                className="c-color-form__text-input"
                type="text"
                placeholder="color title..."
                required
            />
            <input type="color" value="#7289da"/>
            <input type="button" value="Add color"/>
        </form>
    </header>

);

export default AddColorForm