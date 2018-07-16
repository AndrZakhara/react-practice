import React from 'react';
import { Component } from 'react';
import '../styles/AddColorForm.css'

export default class AddColorForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this)
    }

    getTitleInputRef = (node) => {this._title = node};

    submit(e) {
        const { _title, _color }= this.refs;
        console.log(_title);
        console.log(_color.value);
        e.preventDefault();
        alert(`New color: ${_title.value}: ${_color.value}`);
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }


    render() {
        return (
            <header className="l-color-form">
                <form className="c-color-form" onSubmit={this.submit}>
                    <input ref="_title"
                        className="c-color-form__text-input"
                        type="text"
                        placeholder="color title..." required
                    />
                    <input ref = "_color"
                        type="color"
                    />
                    <input
                        type="submit"
                        value="Add color"
                    />
                    {/*<button>Add color</button>*/}
                </form>
            </header>
        )
    }
}




