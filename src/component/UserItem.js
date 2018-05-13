import React from "react";
import "./UserItem.css";

export default function Sidebar(props) {
    const clients = props.clients;

    // for (let i = 0; i < .length; i++) {
    //
    // }
    return (
        <div className = "l-wrapper">
            <div className="c-user-item">
                <a href = {"#" + clients[0].general.lastName}>{clients[0].general.firstName + ' ' + clients[0].general.lastName}</a>
                <a href = {"#" + clients[1].general.lastName}>{clients[1].general.firstName + ' ' + clients[1].general.lastName}</a>
                <a href = {"#" + clients[2].general.lastName}>{clients[2].general.firstName + ' ' + clients[2].general.lastName}</a>
                <a href = {"#" + clients[3].general.lastName}>{clients[3].general.firstName + ' ' + clients[3].general.lastName}</a>
            </div>
        </div>
    )
}
