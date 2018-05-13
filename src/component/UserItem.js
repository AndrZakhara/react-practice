import React from "react";
import "./UserItem.css";

export default function Sidebar(props) {
    const clients = props.client;
    const link = "#" + clients.general.firstName + clients.general.lastName ;
    const avatar = clients.general.avatar;
    const jobCompany = clients.job.company;
    const position = clients.job.title;

    return (
                <a className="c-user-list__item"  href = {link}>
                    <div className="c-user-list__avatar">
                        <img src={avatar} alt=""/>
                    </div>
                    <div className="c-user-list__info">
                        <h4 className="c-user-list__header">{clients.general.firstName + ' ' + clients.general.lastName}</h4>
                        <p>Company: {jobCompany}</p>
                        <p>Position: {position}</p>
                    </div>
                </a>
    )
}
