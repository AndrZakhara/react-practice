import React from 'react';
import { Component } from 'react';
import WeatherDisplay from "./components/WeatherDisplay";

// const DNIPROID = {"id": 709930};

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            cityId: 0
        };
        // this.submit = this.submit.bind(this);
    };

    submit(e) {
        e.preventDefault();
        // console.log(e)
        console.log(this.sityIdValue.value);
        this.setState(
            { cityId: this.sityIdValue.value }
        )
    }

    render() {
        return (
            <div className = "Weather-app">
                <WeatherDisplay id = {this.state.cityId}/>
                <button
                    value = '709930'
                    // value = '705799'
                    ref = {(input) => this.sityIdValue = input}
                    onClick = {(e) => this.submit(e)}>
                    Dnipro
                </button>
            </div>

        )
    }



}
