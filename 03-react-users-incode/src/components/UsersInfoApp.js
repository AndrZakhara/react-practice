import React from 'react';
import { Component } from 'react';
import UserItemList from './UserItemList';
import SelectedUserInfo from './SelectedUserInfo';
import { v4 } from 'uuid';
import Data from '../clients.json';
console.log(Data);
const dataWithId = Data.map((obj) => {
    obj.id = v4();
    return obj;
});
console.log(dataWithId);

export default class UsersInfoApp extends Component {
    render() {
        return (
            <div className="c_user-info">
                <UserItemList userList = {Data}/>
                <SelectedUserInfo />
            </div>
        )
    }
}