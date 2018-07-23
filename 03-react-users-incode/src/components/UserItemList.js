import React from 'react';
import { Component } from 'react';
import UserSearch from './UserSearch';
import UserItem from './UserItem';

export default class UserItemList extends Component {
    render() {
        return (
            <div className="c_user-info__user-item-list">
                <UserSearch />
                <UserItem />
            </div>
        )
    }
}
