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
        userListFiltered: dataWithId,
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


    handleChangeUserSearch(e) {

        let changeInputPromise = new Promise((resolve) => {
            resolve(e.target.value);
        });

        changeInputPromise.then((value)=>{
            this.filterUserList(value)
        });
    };

    filterUserList(value) {
        function sortObject(obj) {
            let boolean = false;

            function sort(obj) {
                for(let key in obj) {

                    if (typeof (obj[key]) === 'object') {
                        sort(obj[key]);

                    } else {

                        if((obj[key]).toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                            boolean = true;
                        }
                    }
                }
                return boolean;
            }
            sort(obj);

            return boolean;
        }
        const userList = this.state.userList.filter((obj => {

            return sortObject(obj);

        }));

        console.log(userList);

        this.setState({ selected: userList[0].id });
        this.setState({ userListFiltered: userList });
    }



    render() {

        return (
            <div className="c_user-info">
                <UserItemList
                    userList = {this.state.userListFiltered}
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