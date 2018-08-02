import React from 'react';


function UserSearch ({handleChangeUserSearch}) {


    return (
            <form className="c_user-info__user-search">
                <input
                    type="text"
                    placeholder="Enter User name..."
                    onChange={evt => handleChangeUserSearch(evt)}
                />
                <input
                    type="button"
                    value="Clear"
                />
            </form>
        )
}

export default UserSearch
