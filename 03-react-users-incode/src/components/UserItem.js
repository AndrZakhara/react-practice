import React, {Component} from 'react';

export  default class UserItem extends Component {

    render(){
        return(
            <div className="c_user-info__user-item">
                <img src={this.props.userInfo.general.avatar} alt="img"/>
                <span>
                    <h3>{this.props.userInfo.general.firstName} {this.props.userInfo.general.lastName}</h3>
                    <p>{this.props.userInfo.job.title}</p>
                    <p>{this.props.userInfo.address.city}, {this.props.userInfo.address.country}</p>
                </span>
            </div>
        )
    }
}


