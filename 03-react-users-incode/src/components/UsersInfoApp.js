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
    constructor(props) {
        super(props);
        this.handleChangeUserSearch = this.handleChangeUserSearch.bind(this);
    };

    state = {
        userList: dataWithId,
        selected: dataWithId[0].id,
        search: ''
    };

    updateSelected = (value) => {
        this.setState({ selected: value });
    };

    selectedUserData (userList, selectedUserId) {
        const  {...selectedUser} = userList.filter((obj) => obj.id === selectedUserId);

        return selectedUser[0];
    };


    handleChangeUserSearch(evt) {

        let changeInputPromise = new Promise((resolve) => {
            resolve(this.setState({search: evt.target.value}));
        });

        changeInputPromise.then(()=>{
            this.searchForm();
        });
    };

    searchForm() {
        console.log(this.state.search);
    }

    render() {

        return (
            <div className="c_user-info">
                <UserItemList
                    userList = {this.state.userList}
                    selected = {this.state.selected}
                    handleChangeUserSearch = {this.handleChangeUserSearch}
                    updateSelected = {this.updateSelected}
                />
                <SelectedUserInfo
                    selectedUserData = {this.selectedUserData(this.state.userList, this.state.selected)}
                />
            </div>
        )
    }
}