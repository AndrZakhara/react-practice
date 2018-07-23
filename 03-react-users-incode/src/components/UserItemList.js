import React from 'react';
import UserSearch from './UserSearch';
import UserItem from './UserItem';

function UserItemList(props) {
    const { userList } = props;

    return (
        <div className="c_user-info__user-item-list">
            <UserSearch />
            {userList.map((userInfo, i) => <UserItem userInfo={userInfo} key={userInfo.id}/>)}
        </div>
    )

}

export default UserItemList