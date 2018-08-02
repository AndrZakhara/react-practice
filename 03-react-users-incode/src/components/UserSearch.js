import React from 'react';


function UserSearch ({ handleChangeUserSearch }) {

    function handleSubmitEnter(e) {
        if(e.keyCode === 13) {
            e.preventDefault();
        }
    }

    return (
            <form className="c_user-info__user-search">
                <input
                    type="text"
                    placeholder="Enter User name..."
                    onChange={e => handleChangeUserSearch(e)}
                    onKeyDown={e => handleSubmitEnter(e)}
                />
                <input
                    type="button"
                    value="Clear"
                />
            </form>
        )
}

export default UserSearch
