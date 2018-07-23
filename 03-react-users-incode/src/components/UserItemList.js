import React from 'react';
import { Component } from 'react';
import UserSearch from './UserSearch';
import UserItem from './UserItem';

export default class UserItemList extends Component {
    render() {
        return (
            <div>
                <UserSearch />
                <UserItem />
            </div>
        )
    }
}
