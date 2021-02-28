import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './User.css';

const User = (props) => {
    console.log(props);
    const {img,name,email,phone,salary}=props.user;
    return (
        <div className="user">
            <div className="user-img-div">
                <img src={img} alt="" />
            </div>
            <div className="user-details-div">
                <h4 className="user-name">{name}</h4>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Salary/Year: ${salary}</p>

                <button className="select-btn" onClick={()=>props.handleSelectUser(props.user)}><FontAwesomeIcon icon={faUserPlus} /> Select User</button>
            </div>
        </div>
    );
};

export default User;
