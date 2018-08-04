import React from 'react';
import {Component} from 'react';
import UserSearch from './UserSearch';
import UserItem from './UserItem';

export default class UserItemList extends Component {

    setSelected(id) {
        return this.props.selected === id ? true : false;
    };

    render() {

        return (
            <div className="c_user-info__user-item-list">
                <UserSearch
                    defaultSearch = {this.props.defaultSearch}
                    handleChangeUserSearch = {this.props.handleChangeUserSearch}
                    handleClearBtnUserListSearch = {this.props.handleClearBtnUserListSearch}
                />
                {this.props.userList.map((userInfo) => (
                    <UserItem
                        userInfo = {userInfo}
                        key = {userInfo.id}
                        selected = {this.setSelected(userInfo.id)}
                        updateSelected = {this.props.updateSelected}
                    />)
                )}
            </div>
        )
    }
}

