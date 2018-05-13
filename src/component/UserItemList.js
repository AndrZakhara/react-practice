import React from 'react';
import UserItem from './UserItem';
import './UserItemList.css';

export default function UserItemList(props) {
    const clients = props.clients;
    const userItemElements = clients.map((item) => <UserItem client = {item} />);
    const element = (
        <div className="c-user-list">
            {userItemElements}
        </div>
    );

    return element;
}