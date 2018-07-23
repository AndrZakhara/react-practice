import React from 'react';
import { Component } from 'react';

export default class UserSearch extends Component {
    render() {
        return(
            <form className="c_user-info__user-search">
                <input type="text" placeholder="Enter User name..."/>
                <input type="submit" value="Search"/>
            </form>


        )
    }
}
