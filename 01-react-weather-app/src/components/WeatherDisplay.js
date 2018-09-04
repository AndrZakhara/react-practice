import React from 'react';
import { Component } from 'react';
import CityWeather from './CityWeather'

export default class WeatherDisplay extends Component {
    constructor() {
        super();
    }

    selectElement = function selectElement(id) {

        if(id === 0) {
            return <h1>Select the city!</h1>
        } else {
            return <CityWeather id = {this.props.id}/>
        }
    };

    render() {
        return (this.selectElement(this.props.id))
    }
}





