import React from 'react';


function UserSearch ({ defaultSearch, handleChangeUserSearch, handleClearBtnUserListSearch }) {

    function handleSubmitEnter(e) {
        if(e.keyCode === 13) {
            e.preventDefault();
        }
    }
    console.log(defaultSearch);
    return (
            <form className="c_user-info__user-search">
                <input
                    type="text"
                    placeholder="Enter User name..."
                    value={defaultSearch}
                    onChange={e => handleChangeUserSearch(e)}
                    onKeyDown={e => handleSubmitEnter(e)}
                />
                <input
                    type="button"
                    value="Clear"
                    onClick={e => handleClearBtnUserListSearch(e)}
                />
            </form>
        )
}

export default UserSearch
