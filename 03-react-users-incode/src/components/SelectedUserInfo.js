import React from 'react';

function SelectedUserInfo({ selectedUserData }) {

    const {general, job, contact, address} = selectedUserData;

    return(
        <div className="c_selected-user">
            <header className="c_selected-user__header">
                <img className="c_selected-user__header-avatar" src={general.avatar} alt={`${general.firstName} ${general.lastName}`}/>
                <div className="c_selected-user__header-contacts">
                    <h1>{general.firstName} {general.lastName}</h1>
                    <p className="c_selected-user__header-contacts--text-sm"><b>Phone:</b> {contact.phone}</p>
                    <p className="c_selected-user__header-contacts--text-sm"><b>E-mail:</b> {contact.email}</p>
                </div>
            </header>
            <section>
                <p><b>Company:</b> {job.company}</p>
                <p><b>Position:</b> {job.title}</p>
                <p><b>Address:</b> {address.street} str., {address.city}, {address.country}</p>
            </section>
        </div>
    )
}

export  default SelectedUserInfo