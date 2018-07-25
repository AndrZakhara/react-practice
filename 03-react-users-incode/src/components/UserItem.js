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

// export  default class UserItem extends Component {
//
//     setComponentProperty(value){
//         return value ? 'c_user-info__user-item--selected':''
//     }
//     render(){
//
//         return(
//             <div className={'c_user-info__user-item ' + this.setComponentProperty(this.props.selected)}
//                  onClick={() => {this.props.updateSelected(this.props.userInfo.id)}}
//             >
//                 <img src={this.props.userInfo.general.avatar} alt="img"/>
//                 <span>
//                     <h3>{this.props.userInfo.general.firstName} {this.props.userInfo.general.lastName}</h3>
//                     <p>{this.props.userInfo.job.title}</p>
//                     <p>{this.props.userInfo.address.city}, {this.props.userInfo.address.country}</p>
//                 </span>
//             </div>
//         )
//     }
// }



