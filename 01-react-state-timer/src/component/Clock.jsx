import React from 'react'
import { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Your date and time:</h1>
                <h2>{this.state.date.toLocaleString()}</h2>
            </div>
        )
    }
}
