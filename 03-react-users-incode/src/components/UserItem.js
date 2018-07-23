import React from 'react';

function UserItem(props) {
    const {userInfo} = props;
    console.log(userInfo);
    return(
        <div className="c_user-info__user-item">
            <img src={userInfo.general.avatar} alt="img"/>
            <span>
                <h3>{userInfo.general.firstName} {userInfo.general.lastName}</h3>
                <p>{userInfo.job.title}</p>
                <p>{userInfo.address.city}, {userInfo.address.country}</p>
            </span>

        </div>
    )
}

export  default UserItem