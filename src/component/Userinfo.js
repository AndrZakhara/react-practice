import React, {Component} from 'react';
import './Userinfo.css';

export default class Userinfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        const {clients} = this.props;
        console.log(clients[0]);
        return (
            <div className = "c-userinfo-main">
                <h2>{clients[0].general.firstName} {clients[0].general.lastName}</h2>
                <p>Company: {clients[0].job.company}</p>
                <p>Position: {clients[0].job.title}</p>
                <p>E-mail: {clients[0].contact.email}</p>
                <p>Phone: {clients[0].contact.phone}</p>
                <p>Address: zipcode:{clients[0].address.zipCode},
                    country: {clients[0].address.country},
                    city: {clients[0].address.city}
                </p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
            </div>
        )
    }
}



