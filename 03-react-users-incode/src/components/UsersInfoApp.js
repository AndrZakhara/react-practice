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
        this.handleClearBtnUserListSearch = this.handleClearBtnUserListSearch.bind(this);
    };

    state = {
        userList: dataWithId,
        userListFiltered: dataWithId,
        selected: dataWithId[0].id,
        defaultSearch: ''
    };

    userNotFound = [
        {
            "id": "0000-0000-0000-0000",
            "general": {
                "firstName": "User not found, try again please",
                "lastName": "",
                "avatar": "https://www.bidorbuy.co.za/images/ui/bob_no_tradeimage-b.png"
            },
            "job": {
                "company": "company",
                "title": ""
            },
            "contact": {
                "email": "mail@mail.mail",
                "phone": ""
            },
            "address": {
                "street": "street",
                "city": "",
                "zipCode": "",
                "country": ""
            }
        }
    ];

    handleClearBtnUserListSearch(e) {
        this.setState(
            {
                userListFiltered: dataWithId,
                selected: dataWithId[0].id,
                defaultSearch: ''
            }
        )

    }

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
        this.setState({defaultSearch: e.target.value})

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

        if(userList.length === 0) {
            this.setState({
                selected: this.userNotFound[0].id,
                userListFiltered: this.userNotFound
            });
        } else {
            this.setState({
                selected: userList[0].id,
                userListFiltered: userList
            });
        }
    }

    render() {

        return (
            <div className="c_user-info">
                <UserItemList
                    userList = {this.state.userListFiltered}
                    selected = {this.state.selected}
                    handleChangeUserSearch = {this.handleChangeUserSearch}
                    handleClearBtnUserListSearch = {this.handleClearBtnUserListSearch}
                    updateSelected = {this.updateSelected}
                    defaultSearch = {this.state.defaultSearch}
                />
                <SelectedUserInfo
                    selectedUserData = {this.selectedUserData(this.state.userListFiltered, this.state.selected)}
                />
            </div>
        )
    }
}