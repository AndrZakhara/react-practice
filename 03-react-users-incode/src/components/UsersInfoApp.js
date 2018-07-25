import React from 'react';
import { Component } from 'react';
import UserItemList from './UserItemList';
import SelectedUserInfo from './SelectedUserInfo';
import { v4 } from 'uuid';
import Data from '../clients.json';


const dataWithId = Data.map((obj) => {
    obj.id = v4();
    return obj;
});

export default class UsersInfoApp extends Component {
    state = {
        userList: dataWithId
    };

    render() {
        return (
            <div className="c_user-info">
                <UserItemList userList = {dataWithId} />
                <SelectedUserInfo />
            </div>
        )
    }
}