import React from 'react';
import { Component } from 'react';
import UserItemList from './UserItemList';
import SelectedUserInfo from './SelectedUserInfo'

export default class UsersInfoApp extends Component {
    render() {
        return (
            <div className="c_user-info">
                <UserItemList />
                <SelectedUserInfo />
            </div>
        )
    }
}