import React from 'react';
import UserItem from './UserItem';
import './UserItemList.css';
import Search from './Search';

export default function UserItemList(props) {
    const clients = props.clients;
    const userItemElements = clients.map((item) => <UserItem client = {item} />);
    const element = (
        <div className="c-user-list">
            <Search />
            {userItemElements}
        </div>
    );

    return element;
}