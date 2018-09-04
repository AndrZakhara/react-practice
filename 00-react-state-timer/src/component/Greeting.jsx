import React from 'react'
import { Component } from 'react'

class Greeting extends Component {

    render() {
        return (
            <h1>Hi, {this.props.name}!</h1>
        )
    }
}

export default Greeting;