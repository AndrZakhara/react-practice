import React from 'react';

function UserItem ({ userInfo, selected, updateSelected }) {

    function setComponentProperty(value){

        return value ? 'c_user-info__user-item--selected':''
    }

    return(
        <div className={'c_user-info__user-item ' + setComponentProperty(selected)}
             onClick={() => {updateSelected(userInfo.id)}}
        >
            <img src={userInfo.general.avatar} alt="img"/>
            <span>
                <h3>{userInfo.general.firstName} {userInfo.general.lastName}</h3>
                <p>{userInfo.job.title}</p>
                <p>{userInfo.address.city}, {userInfo.address.country}</p>
            </span>
        </div>
    )
}

export default UserItem




