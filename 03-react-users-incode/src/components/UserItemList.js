import React from 'react';
import {Component} from 'react';
import UserSearch from './UserSearch';
import UserItem from './UserItem';

export default class UserItemList extends Component {

    state = {
        selected: this.props.userList[0].id
    };
    setSelected(id) {
        return this.state.selected === id ? true : false;
    };
    updateSelected = (value) => {
        this.setState({ selected: value })
    };

    render() {
        return (
            <div className="c_user-info__user-item-list">
                <UserSearch />
                {this.props.userList.map((userInfo) => (
                    <UserItem
                        userInfo={userInfo}
                        key={userInfo.id}
                        selected={this.setSelected(userInfo.id)}
                        updateSelected={this.updateSelected}

                    />
                )

                )}
            </div>
        )
    }
}

