import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json'
import SelectedUser from '../SelectedUser/SelectedUser';
import User from '../User/User';
import './Main.css';

const Main = () => {
    const [user,setUser]=useState([]);
    useEffect(()=>{
        setUser(fakeData);
    }, [])

    const [selectedUser,setSelectedUser]=useState([]);

    const handleSelectUser=user=>{
        const newSelectedUser=[...selectedUser,user];
        setSelectedUser(newSelectedUser);
    }
    
    return (
        <div className="main-container">
            <div className="user-container">
            <h3 className="user-title">All User's Information</h3>
                  {
                    user.map(ur=>
                    <User handleSelectUser={handleSelectUser} user={ur}></User>)
                  }     
            </div>
            <div className="selected-user-container">
                  <h3 className="user-title">Selected Users</h3>
                  <SelectedUser selectedUser={selectedUser}></SelectedUser>
            </div>
            
        </div>
    );
};

export default Main;