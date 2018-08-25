import React from 'react'
import { Component } from 'react'

export default class CityWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: null
        };
    }
    componentDidMount() {
        const ID = this.props.id;
        const USER_ID = '9b0567bf9015abf6bfc0eb48e2750937';
        const URL = 'http://api.openweathermap.org/data/2.5/weather?id=' +
            ID +
            "&appid=" +
            USER_ID +
            '&units=metric';
        console.log(URL);
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({ weatherData: json});
        })
    }


    render() {
        console.log(this.state.weatherData);
        const weatherData = this.state.weatherData;


        if(!weatherData) {
            return  <div>Loading...</div>
        }
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return <div>
            <h1>
                {weather.main} in {weatherData.name}
                <img src={iconUrl} alt={weatherData.description} />
            </h1>
            <p>Current: {weatherData.main.temp}°C</p>
            <p>High: {weatherData.main.temp_max}°C</p>
            <p>Low: {weatherData.main.temp_min}°C</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>


        // return <h1>Displaying weather for city ID = {this.props.id}!</h1>
    }
}

